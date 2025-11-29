import { existsSync, mkdirSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

// Get __filename equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev, isServer }) => {
    // Fix Webpack cache issues on Windows
    // Ensure cache directory exists before webpack tries to use it
    const cacheDir = join(process.cwd(), '.next', 'cache', 'webpack');
    if (!existsSync(cacheDir)) {
      try {
        mkdirSync(cacheDir, { recursive: true });
      } catch (error) {
        // Silently handle directory creation errors
        console.warn('Warning: Could not create webpack cache directory:', error.message);
      }
    }

    // Configure webpack cache with Windows-friendly settings
    // Only modify cache if it's already configured (Next.js sets it up)
    if (config.cache && typeof config.cache === 'object' && config.cache.type === 'filesystem') {
      // Enhance existing cache configuration for Windows compatibility
      config.cache = {
        ...config.cache,
        // Windows-friendly settings: disable compression in dev to avoid .gz file issues
        // Production builds still use compression for better performance
        compression: dev ? false : config.cache.compression || 'gzip',
        // Increase timeouts for Windows filesystem operations
        idleTimeout: 20000,
        idleTimeoutForInitialStore: 30000,
        // Reduce memory generations to avoid Windows path length issues
        maxMemoryGenerations: 1,
        // Ensure build dependencies are tracked
        buildDependencies: {
          ...(config.cache.buildDependencies || {}),
          config: [__filename],
        },
      };
    }

    return config;
  },
  // Ensure Next.js handles cache errors gracefully
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
};

export default nextConfig;
