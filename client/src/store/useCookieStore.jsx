import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { cookiesTemplate, profileDataTemplate } from "@/lib/cookies.config.js";

const clonePermissionsTemplate = () => structuredClone(cookiesTemplate);
const cloneProfileDataTemplate = () => structuredClone(profileDataTemplate);

const setAllAccepted = (obj, value) =>
    Object.fromEntries(
        Object.entries(obj).map(([k, v]) => [k, { ...v, accepted: value }])
    );

export const useCookieStore = create(
    persist(
        (set, get) => ({
            permissions: clonePermissionsTemplate(),
            profileData: cloneProfileDataTemplate(),
            hasProfileData: false,
            updatedAt: null,

            // derived helpers
            hasDecided: () => {
                const p = get().permissions;
                // if any is accepted true, OR all are false but user pressed "save",
                // we need an explicit flag. We'll keep it simple: updatedAt !== null.
                return get().updatedAt !== null;
            },

            // actions
            setPermission: (key, accepted) =>
                set((state) => ({
                    permissions: {
                        ...state.permissions,
                        [key]: { ...state.permissions[key], accepted },
                    },
                    updatedAt: Date.now(),
                })),

            setProfileData: (data) => {
                const templateData = cloneProfileDataTemplate();

                const filteredData = Object.fromEntries(
                    Object.entries(data).filter(([k]) => k in templateData)
                );
                set(() => ({
                    profileData: filteredData,
                    hasProfileData: true,
                    updatedAt: Date.now(),
                }));
            },

            togglePermission: (key) =>
                set((state) => ({
                    permissions: {
                        ...state.permissions,
                        [key]: {
                            ...state.permissions[key],
                            accepted: !state.permissions[key]?.accepted,
                        },
                    },
                    updatedAt: Date.now(),
                })),

            acceptAll: () =>
                set((state) => ({
                    permissions: setAllAccepted(state.permissions, true),
                    updatedAt: Date.now(),
                })),

            rejectAll: () =>
                set((state) => ({
                    permissions: setAllAccepted(state.permissions, false),
                    updatedAt: Date.now(),
                })),

            // if later you add a "save preferences" button
            save: (permissions) =>
                set(() => ({
                    permissions,
                    updatedAt: Date.now(),
                })),

            // optional: reset to template defaults
            reset: () =>
                set(() => ({
                    permissions: clonePermissionsTemplate(),
                    profileData: cloneProfileDataTemplate(),
                    hasProfileData: false,
                    updatedAt: null,
                })),
        }),
        {
            name: "tracce_cookies",
            storage: createJSONStorage(() => localStorage),
            partialize: (state) => ({
                permissions: state.permissions,
                profileData: state.profileData,
                hasProfileData: state.hasProfileData,
                updatedAt: state.updatedAt,
            }),
        }
    )
);
