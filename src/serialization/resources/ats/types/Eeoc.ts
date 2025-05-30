/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Merge from "../../../../api/index";
import * as core from "../../../../core";
import { EeocCandidate } from "./EeocCandidate";
import { EeocRace } from "./EeocRace";
import { EeocGender } from "./EeocGender";
import { EeocVeteranStatus } from "./EeocVeteranStatus";
import { EeocDisabilityStatus } from "./EeocDisabilityStatus";
import { RemoteData } from "./RemoteData";

export const Eeoc: core.serialization.ObjectSchema<serializers.ats.Eeoc.Raw, Merge.ats.Eeoc> =
    core.serialization.object({
        id: core.serialization.string().optional(),
        remoteId: core.serialization.property("remote_id", core.serialization.string().optional()),
        createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
        modifiedAt: core.serialization.property("modified_at", core.serialization.date().optional()),
        candidate: EeocCandidate.optional(),
        submittedAt: core.serialization.property("submitted_at", core.serialization.date().optional()),
        race: EeocRace.optional(),
        gender: EeocGender.optional(),
        veteranStatus: core.serialization.property("veteran_status", EeocVeteranStatus.optional()),
        disabilityStatus: core.serialization.property("disability_status", EeocDisabilityStatus.optional()),
        remoteWasDeleted: core.serialization.property("remote_was_deleted", core.serialization.boolean().optional()),
        fieldMappings: core.serialization.property(
            "field_mappings",
            core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
        ),
        remoteData: core.serialization.property("remote_data", core.serialization.list(RemoteData).optional()),
    });

export declare namespace Eeoc {
    export interface Raw {
        id?: string | null;
        remote_id?: string | null;
        created_at?: string | null;
        modified_at?: string | null;
        candidate?: EeocCandidate.Raw | null;
        submitted_at?: string | null;
        race?: EeocRace.Raw | null;
        gender?: EeocGender.Raw | null;
        veteran_status?: EeocVeteranStatus.Raw | null;
        disability_status?: EeocDisabilityStatus.Raw | null;
        remote_was_deleted?: boolean | null;
        field_mappings?: Record<string, unknown> | null;
        remote_data?: RemoteData.Raw[] | null;
    }
}
