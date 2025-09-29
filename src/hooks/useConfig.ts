'use client'

/**
 * React Hook for Band Website Configuration
 *
 * Provides easy access to configuration values and utilities
 * throughout the React component tree.
 */

import { useEffect, useState } from 'react'
import {
  getConfig,
  loadConfig,
  getBandContent,
  getMediaPaths,
  getConfiguredClasses,
  getAnimationClasses,
  getAnimationDuration,
  injectCSSVariables
} from '../../config/config-utils'
import { BandWebsiteConfig, defaultConfig } from '../../config/band.config'

// ================================
// MAIN CONFIGURATION HOOK
// ================================

export function useConfig() {
  const [config, setConfig] = useState<BandWebsiteConfig>(defaultConfig)

  useEffect(() => {
    // Load configuration (can be from environment, database, etc.)
    const loadedConfig = getConfig()
    setConfig(loadedConfig)

    // Inject CSS variables
    injectCSSVariables(loadedConfig)
  }, [])

  return {
    config,
    updateConfig: (newConfig: Partial<BandWebsiteConfig>) => {
      const updatedConfig = loadConfig(newConfig)
      setConfig(updatedConfig)
      injectCSSVariables(updatedConfig)
    }
  }
}

// ================================
// CONTENT HOOKS
// ================================

/**
 * Hook for band content (name, tagline, descriptions, etc.)
 */
export function useBandContent() {
  const content = getBandContent()

  return {
    bandName: content.bandName,
    tagline: content.tagline,
    description: content.description,
    social: content.social,
    contact: content.contact
  }
}

/**
 * Hook for media paths and assets
 */
export function useMediaPaths() {
  return getMediaPaths()
}

// ================================
// STYLING HOOKS
// ================================

/**
 * Hook for configured Tailwind classes
 */
export function useConfiguredClasses() {
  return getConfiguredClasses()
}

/**
 * Hook for animation classes based on configuration
 */
export function useAnimationClasses() {
  return getAnimationClasses()
}

/**
 * Hook for calculating animation durations
 */
export function useAnimationDuration() {
  return (baseDuration: number) => getAnimationDuration(baseDuration)
}

// ================================
// SPECIFIC FEATURE HOOKS
// ================================

/**
 * Hook for color palette
 */
export function useColorPalette() {
  const config = getConfig()
  return config.core.primaryColorPalette
}

/**
 * Hook for typography settings
 */
export function useTypography() {
  const config = getConfig()
  return config.core.typographyPair
}

/**
 * Hook for animation settings
 */
export function useAnimationSettings() {
  const config = getConfig()
  return {
    intensity: config.core.animationIntensity,
    speedMultiplier: config.genre.motionSpeedMultiplier,
    particleDensity: config.genre.particleEffectsDensity,
    glowIntensity: config.genre.glowIntensity
  }
}

/**
 * Hook for layout settings
 */
export function useLayoutSettings() {
  const config = getConfig()
  return {
    spacing: config.genre.layoutSpacing,
    borderRadius: config.core.borderRadiusScale,
    shadows: config.genre.shadowIntensity,
    contrast: config.core.contrastLevel
  }
}

// ================================
// CONDITIONAL RENDERING HOOKS
// ================================

/**
 * Hook to determine if effects should be rendered based on performance settings
 */
export function useEffectsEnabled() {
  const config = getConfig()

  return {
    particles: config.genre.particleEffectsDensity > 0,
    glow: config.genre.glowIntensity > 0,
    heavyAnimations: config.core.animationIntensity === 'full',
    backgroundVideo: config.core.animationIntensity !== 'minimal'
  }
}

/**
 * Hook for responsive breakpoints (can be made configurable later)
 */
export function useBreakpoints() {
  return {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  }
}

// ================================
// UTILITY HOOKS
// ================================

/**
 * Hook to check if we're in development mode for config debugging
 */
export function useConfigDebug() {
  const isDev = process.env.NODE_ENV === 'development'

  return {
    isDev,
    logConfig: () => {
      if (isDev) {
        console.log('Current Band Website Config:', getConfig())
      }
    }
  }
}