/* eslint-disable prettier/prettier */

/**
 * ============================================================
 * Environment Configuration
 * ============================================================
 *
 * Centralized access to all environment variables.
 * Never use import.meta.env outside this file.
 * ============================================================
 */

function getEnvVariable(name: keyof ImportMetaEnv): string {

    const value = import.meta.env[name]?.trim();

    if (!value) {
        throw new Error(
            `Missing required environment variable: ${name}`
        );
    }

    return value;
}

function getEnvironment(): "development" | "production" {

    const environment = getEnvVariable("VITE_ENVIRONMENT");

    if (
        environment !== "development" &&
        environment !== "production"
    ) {
        throw new Error(
            `Invalid VITE_ENVIRONMENT: ${environment}`
        );
    }

    return environment;
}

export const ENV = {

    API_URL: getEnvVariable("VITE_API_URL"),

    TURNSTILE_SITE_KEY:
        getEnvVariable("VITE_TURNSTILE_SITE_KEY"),

    ENVIRONMENT:
        getEnvironment()

};