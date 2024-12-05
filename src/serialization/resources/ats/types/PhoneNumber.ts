/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { PhoneNumberPhoneNumberType } from "./PhoneNumberPhoneNumberType";

export const PhoneNumber: core.serialization.ObjectSchema<serializers.ats.PhoneNumber.Raw, Merge.ats.PhoneNumber> =
    core.serialization.object({
        createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
        modifiedAt: core.serialization.property("modified_at", core.serialization.date().optional()),
        value: core.serialization.string().optional(),
        phoneNumberType: core.serialization.property("phone_number_type", PhoneNumberPhoneNumberType.optional()),
        remoteWasDeleted: core.serialization.property("remote_was_deleted", core.serialization.boolean().optional()),
    });

export declare namespace PhoneNumber {
    interface Raw {
        created_at?: string | null;
        modified_at?: string | null;
        value?: string | null;
        phone_number_type?: PhoneNumberPhoneNumberType.Raw | null;
        remote_was_deleted?: boolean | null;
    }
}
