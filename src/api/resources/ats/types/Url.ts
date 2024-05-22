/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../..";

/**
 * # The Url Object
 *
 * ### Description
 *
 * The `Url` object is used to represent hyperlinks associated with the parent model.
 *
 * ### Usage Example
 *
 * Fetch from the `GET Candidate` endpoint and view their website urls.
 */
export interface Url {
    /** The datetime that this object was created by Merge. */
    createdAt?: Date;
    /** The datetime that this object was modified by Merge. */
    modifiedAt?: Date;
    /** The site's url. */
    value?: string;
    /**
     * The type of site.
     *
     * - `PERSONAL` - PERSONAL
     * - `COMPANY` - COMPANY
     * - `PORTFOLIO` - PORTFOLIO
     * - `BLOG` - BLOG
     * - `SOCIAL_MEDIA` - SOCIAL_MEDIA
     * - `OTHER` - OTHER
     * - `JOB_POSTING` - JOB_POSTING
     */
    urlType?: Merge.ats.UrlUrlType;
}
