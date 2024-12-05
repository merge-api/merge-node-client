/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../../index";

/**
 * The author of the Comment, if the author is a Contact.If the third party does not support specifying an author, we will append "[Posted on behalf of {name}]" to the comment.
 */
export type CommentRequestContact = string | Merge.ticketing.Contact;
