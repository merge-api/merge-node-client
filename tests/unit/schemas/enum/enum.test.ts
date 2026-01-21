import { enum_ } from "../../../../src/core/schemas/builders/enum";
import { itSchemaIdentity } from "../utils/itSchema";
import { itValidate } from "../utils/itValidate";

describe("enum", () => {
    itSchemaIdentity(enum_(["A", "B", "C"]), "A");

    itSchemaIdentity(enum_(["A", "B", "C"]), "D" as any, {
        opts: { allowUnrecognizedEnumValues: true },
    });

    itSchemaIdentity(enum_(["A", "B", "C"]), "D" as any);

    itValidate(
        "non-string",
        enum_(["A", "B", "C"]),
        [],
        [
            {
                message: "Expected string. Received list.",
                path: [],
            },
        ],
    );
});
