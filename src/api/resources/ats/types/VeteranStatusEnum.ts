/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * * `I_AM_NOT_A_PROTECTED_VETERAN` - I_AM_NOT_A_PROTECTED_VETERAN
 * * `I_IDENTIFY_AS_ONE_OR_MORE_OF_THE_CLASSIFICATIONS_OF_A_PROTECTED_VETERAN` - I_IDENTIFY_AS_ONE_OR_MORE_OF_THE_CLASSIFICATIONS_OF_A_PROTECTED_VETERAN
 * * `I_DONT_WISH_TO_ANSWER` - I_DONT_WISH_TO_ANSWER
 */
export type VeteranStatusEnum =
    | "I_AM_NOT_A_PROTECTED_VETERAN"
    | "I_IDENTIFY_AS_ONE_OR_MORE_OF_THE_CLASSIFICATIONS_OF_A_PROTECTED_VETERAN"
    | "I_DONT_WISH_TO_ANSWER";
export const VeteranStatusEnum = {
    IAmNotAProtectedVeteran: "I_AM_NOT_A_PROTECTED_VETERAN",
    IIdentifyAsOneOrMoreOfTheClassificationsOfAProtectedVeteran:
        "I_IDENTIFY_AS_ONE_OR_MORE_OF_THE_CLASSIFICATIONS_OF_A_PROTECTED_VETERAN",
    IDontWishToAnswer: "I_DONT_WISH_TO_ANSWER",
} as const;
