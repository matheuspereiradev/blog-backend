export class YouArentAllowedToEditThisPost extends Error{
    constructor(){
        super("You aren't allowed to edit this post");
    }
}