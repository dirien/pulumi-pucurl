// *** WARNING: this file was generated by pulumi. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * A Pulumi provider for making API calls
 */
export class Purrl extends pulumi.CustomResource {
    /**
     * Get an existing Purrl resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Purrl {
        return new Purrl(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'purrl:index:Purrl';

    /**
     * Returns true if the given object is an instance of Purrl.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Purrl {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Purrl.__pulumiType;
    }

    /**
     * The body of the request.
     */
    public readonly body!: pulumi.Output<string | undefined>;
    /**
     * The body of the request.
     */
    public readonly deleteBody!: pulumi.Output<string | undefined>;
    /**
     * The headers to send with the request.
     */
    public readonly deleteHeaders!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The HTTP method to use.
     */
    public readonly deleteMethod!: pulumi.Output<string | undefined>;
    /**
     * The response from the API call.
     */
    public /*out*/ readonly deleteResponse!: pulumi.Output<string | undefined>;
    /**
     * The expected response code.
     */
    public readonly deleteResponseCodes!: pulumi.Output<string[] | undefined>;
    /**
     * The API endpoint to call.
     */
    public readonly deleteUrl!: pulumi.Output<string | undefined>;
    /**
     * The headers to send with the request.
     */
    public readonly headers!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The HTTP method to use.
     */
    public readonly method!: pulumi.Output<string>;
    /**
     * The name for this API call.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The response from the API call.
     */
    public /*out*/ readonly response!: pulumi.Output<string>;
    /**
     * The expected response code.
     */
    public readonly responseCodes!: pulumi.Output<string[]>;
    /**
     * The API endpoint to call.
     */
    public readonly url!: pulumi.Output<string>;

    /**
     * Create a Purrl resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PurrlArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.method === undefined) && !opts.urn) {
                throw new Error("Missing required property 'method'");
            }
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.responseCodes === undefined) && !opts.urn) {
                throw new Error("Missing required property 'responseCodes'");
            }
            if ((!args || args.url === undefined) && !opts.urn) {
                throw new Error("Missing required property 'url'");
            }
            resourceInputs["body"] = args ? args.body : undefined;
            resourceInputs["deleteBody"] = args ? args.deleteBody : undefined;
            resourceInputs["deleteHeaders"] = args ? args.deleteHeaders : undefined;
            resourceInputs["deleteMethod"] = args ? args.deleteMethod : undefined;
            resourceInputs["deleteResponseCodes"] = args ? args.deleteResponseCodes : undefined;
            resourceInputs["deleteUrl"] = args ? args.deleteUrl : undefined;
            resourceInputs["headers"] = args ? args.headers : undefined;
            resourceInputs["method"] = args ? args.method : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["responseCodes"] = args ? args.responseCodes : undefined;
            resourceInputs["url"] = args ? args.url : undefined;
            resourceInputs["deleteResponse"] = undefined /*out*/;
            resourceInputs["response"] = undefined /*out*/;
        } else {
            resourceInputs["body"] = undefined /*out*/;
            resourceInputs["deleteBody"] = undefined /*out*/;
            resourceInputs["deleteHeaders"] = undefined /*out*/;
            resourceInputs["deleteMethod"] = undefined /*out*/;
            resourceInputs["deleteResponse"] = undefined /*out*/;
            resourceInputs["deleteResponseCodes"] = undefined /*out*/;
            resourceInputs["deleteUrl"] = undefined /*out*/;
            resourceInputs["headers"] = undefined /*out*/;
            resourceInputs["method"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["response"] = undefined /*out*/;
            resourceInputs["responseCodes"] = undefined /*out*/;
            resourceInputs["url"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Purrl.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Purrl resource.
 */
export interface PurrlArgs {
    /**
     * The body of the request.
     */
    body?: pulumi.Input<string>;
    /**
     * The body of the request.
     */
    deleteBody?: pulumi.Input<string>;
    /**
     * The headers to send with the request.
     */
    deleteHeaders?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The HTTP method to use.
     */
    deleteMethod?: pulumi.Input<string>;
    /**
     * The expected response code.
     */
    deleteResponseCodes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The API endpoint to call.
     */
    deleteUrl?: pulumi.Input<string>;
    /**
     * The headers to send with the request.
     */
    headers?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The HTTP method to use.
     */
    method: pulumi.Input<string>;
    /**
     * The name for this API call.
     */
    name: pulumi.Input<string>;
    /**
     * The expected response code.
     */
    responseCodes: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The API endpoint to call.
     */
    url: pulumi.Input<string>;
}