interface TransformationMeta {
    title: string
    fields: { [key: string]: { [key: string]: any } },
}

// TODO: Load the meta data from the server
export const TRANSFORMATIONS: { [key: string]: TransformationMeta } = {"data-convert": {"title": "Convert {field} to {to}", "fields": {"field": {"name": "Field", "type": "string", "help": "The field to convert", "required": true, "input": "column", "multiple": false, "default": ""}, "to": {"name": "To", "type": "string", "help": "To which data type to convert", "required": true, "input": "select", "multiple": false, "default": "", "options": {"int": "Integer", "float": "Floating point number", "string": "Text"}}}}, "math-add": {"title": "Sum {fields}", "fields": {"fields": {"name": "Columns", "type": "list<string>", "help": "The fields to add to each other", "required": true, "input": "column", "multiple": true, "default": ""}, "output": {"name": "Output column", "type": "string", "input": "text", "required": true, "help": "The name of the (newly created) column that contains the results", "default": ""}}}, "math-min": {"title": "Calculate {field_a} - {field_b}", "fields": {"field_a": {"name": "Field 1", "type": "string", "help": "The field that should be subtracted from", "required": true, "input": "column", "multiple": false, "default": ""}, "field_b": {"name": "Field 2", "type": "string", "help": "The field that should be subtracted", "required": true, "input": "column", "multiple": false, "default": ""}, "output": {"name": "Output column", "type": "string", "input": "text", "required": true, "help": "The name of the (newly created) column that contains the results", "default": ""}}}, "math-multiply": {"title": "Multiply {fields}", "fields": {"fields": {"name": "Fields", "type": "list<string>", "help": "The fields to add to each other", "required": true, "input": "column", "multiple": true, "default": ""}, "output": {"name": "Output column", "type": "string", "input": "text", "required": true, "help": "The name of the (newly created) column that contains the results", "default": ""}}}, "math-divide": {"title": "Calculate {field_a} / {field_b}", "fields": {"field_a": {"name": "Numerator", "type": "string", "help": "The numerator", "required": true, "input": "column", "multiple": false, "default": ""}, "field_b": {"name": "Denominator", "type": "string", "help": "The denominator", "required": true, "input": "column", "multiple": false, "default": ""}, "output": {"name": "Output column", "type": "string", "input": "text", "required": true, "help": "The name of the (newly created) column that contains the results", "default": ""}}}, "format-uppercase": {"title": "Convert {fields} to uppercase", "fields": {"fields": {"name": "Columns", "type": "list<string>", "help": "The fields to re-format", "required": true, "input": "column", "multiple": true, "default": ""}}}, "format-lowercase": {"title": "Convert {fields} to lowercase", "fields": {"fields": {"name": "Columns", "type": "list<string>", "help": "The fields to re-format", "required": true, "input": "column", "multiple": true, "default": ""}}}, "format-trim-whitespace": {"title": "Trim {fields} of whitespace", "fields": {"fields": {"name": "Columns", "type": "list<string>", "help": "The fields to trim", "required": true, "input": "column", "multiple": true, "default": ""}, "side": {"name": "Side", "type": "string", "help": "Which side of the string should be trimmed?", "required": true, "input": "select", "multiple": false, "default": "", "options": {"both": "Both", "left": "Left", "right": "Right"}}}}, "format-trim-quotes": {"title": "Trim {fields} of quotes", "fields": {"fields": {"name": "Columns", "type": "list<string>", "help": "The fields to trim", "required": true, "input": "column", "multiple": true, "default": ""}, "side": {"name": "Side", "type": "string", "help": "Which side of the string should be trimmed?", "required": true, "input": "select", "multiple": false, "default": "", "options": {"both": "Both", "left": "Left", "right": "Right"}}}}, "format-remove-whitespace": {"title": "Remove whitespace from {fields}", "fields": {"fields": {"name": "Columns", "type": "list<string>", "help": "The fields to re-format", "required": true, "input": "column", "multiple": true, "default": ""}}}, "format-remove-symbols": {"title": "Remove symbols from {fields}", "fields": {"fields": {"name": "Columns", "type": "list<string>", "help": "The fields to re-format", "required": true, "input": "column", "multiple": true, "default": ""}}}, "format-remove-accents": {"title": "Remove accents from {fields}", "fields": {"fields": {"name": "Columns", "type": "list<string>", "help": "The fields to re-format", "required": true, "input": "column", "multiple": true, "default": ""}}}, "format-add-prefix": {"title": "Add the prefix {text} to {fields}", "fields": {"fields": {"name": "Columns", "type": "list<string>", "help": "The fields to trim", "required": true, "input": "column", "multiple": true, "default": ""}, "text": {"name": "Text", "type": "string", "help": "The text to add", "required": true, "input": "text", "default": ""}}}, "format-add-suffix": {"title": "Add the suffix {text} to {fields}", "fields": {"fields": {"name": "Columns", "type": "list<string>", "help": "The fields to trim", "required": true, "input": "column", "multiple": true, "default": ""}, "text": {"name": "Text", "type": "string", "help": "The text to add", "required": true, "input": "text", "default": ""}}}, "format-pad": {"title": "Pad {fields} {side} to {length} characters with {character}", "fields": {"fields": {"name": "Columns", "type": "list<string>", "help": "The fields to trim", "required": true, "input": "column", "multiple": true, "default": ""}, "character": {"name": "Character", "type": "string", "help": "The character to pad the string with", "required": true, "input": "text", "default": ""}, "length": {"name": "Length", "type": "number", "help": "What should be the length of the resulting string", "required": true, "input": "number", "default": 0}, "side": {"name": "Side", "type": "string", "help": "On which side should the padding take place", "required": true, "input": "select", "multiple": false, "default": "", "options": {"left": "Left", "right": "Right"}}}}, "count-exact": {"title": "Count exact matches of {search} in {field} as {output}", "fields": {"field": {"name": "Input", "type": "string", "help": "The column to use as input", "required": true, "input": "column", "multiple": false, "default": ""}, "search": {"name": "Search", "type": "string", "help": "The string to search for", "required": true, "input": "text", "default": ""}, "output": {"name": "Output column", "type": "string", "input": "text", "required": true, "help": "The name of the (newly created) column that contains the results", "default": ""}}}, "count-pattern": {"title": "Count exact matches of the regex {pattern} in {field} as {output}", "fields": {"field": {"name": "Input", "type": "string", "help": "The column to use as input", "required": true, "input": "column", "multiple": false, "default": ""}, "pattern": {"name": "Pattern", "type": "regex", "help": "The regex pattern to look for", "required": true, "input": "text", "default": ""}, "output": {"name": "Output column", "type": "string", "input": "text", "required": true, "help": "The name of the (newly created) column that contains the results", "default": ""}}}, "count-delimiters": {"title": "Count the number of strings between delimiter {delimiter} in {field} as {output}", "fields": {"field": {"name": "Input", "type": "string", "help": "The column to use as input", "required": true, "input": "column", "multiple": false, "default": ""}, "delimiter": {"name": "Delimiter", "type": "string", "help": "The delimiter to split the string on", "required": true, "input": "text", "default": ""}, "output": {"name": "Output column", "type": "string", "input": "text", "required": true, "help": "The name of the (newly created) column that contains the results", "default": ""}}}};
// export const TRANSFORMATIONS: { [key: string]: TransformationMeta } = {
//     "data-convert": {
//         "title": "Convert {field} to {to}",
//         "fields": {
//             "field": {
//                 "name": "Column", "type": "string", "help": "The field to convert", "required": true,
//                 "input": "column", "multiple": false, "default": ""
//             },
//             "to": {
//                 "name": "To", "type": "string", "help": "To which data type to convert", "required": true,
//                 "input": "select", "multiple": false, "default": "",
//                 "options": { "int": "Integer", "float": "Floating point number", "string": "Text" }
//             }
//         }
//     },
//     "math-add": {
//         "title": "Sum {fields}",
//         "fields": {
//             "fields": {
//                 "name": "Columns", "type": "list<string>", "help": "The fields to add to each other",
//                 "required": true, "input": "column", "multiple": true, "default": []
//             },
//             "output": {
//                 "name": "Output column", "type": "string", "input": "text", "required": true,
//                 "help": "The name of the (newly created) column that contains the results", "default": ""
//             },
//         }
//     },
//     "math-min": {
//         "title": "Calculate {field_a} - {field_b}",
//         "fields": {
//             "field_a": {
//                 "name": "Field 1", "type": "string", "help": "The field that should be subtracted from",
//                 "required": true, "input": "column", "multiple": false, "default": ""
//             },
//             "field_b": {
//                 "name": "Field 2", "type": "string", "help": "The field that should be subtracted",
//                 "required": true, "input": "column", "multiple": false, "default": ""
//             },
//             "output": {
//                 "name": "Output column", "type": "string", "input": "text", "required": true, "default": "",
//                 "help": "The name of the (newly created) column that contains the results"
//             },

//         }
//     },
//     "math-multiply": {
//         "title": "Multiply {fields}",
//         "fields": {
//             "fields": {
//                 "name": "Columns", "type": "list<string>", "help": "The fields to add to each other",
//                 "required": true, "input": "column", "multiple": true, "default": []
//             },
//             "output": {
//                 "name": "Output column", "type": "string", "input": "text", "required": true,
//                 "help": "The name of the (newly created) column that contains the results", "default": ""
//             }
//         }
//     },
//     "math-divide": {
//         "title": "Calculate {field_a} / {field_b}",
//         "fields": {
//             "field_a": {
//                 "name": "Numerator", "type": "string", "help": "The numerator",
//                 "required": true, "input": "column", "multiple": false, "default": ""
//             },
//             "field_b": {
//                 "name": "Denominator", "type": "string", "help": "The denominator",
//                 "required": true, "input": "column", "multiple": false, "default": ""
//             },
//             "output": {
//                 "name": "Output column", "type": "string", "input": "text", "required": true, "default": "",
//                 "help": "The name of the (newly created) column that contains the results"
//             },

//         }
//     }

// }

export interface Transformation {
    id: number,
    kwargs: string,
    previous: number | null,
    next?: number[],
    recipe: number,
    transformation: string,
}

export function transformationMakeTitle(transformation: Transformation): string {
    let title = transformation.transformation;
    let kwargs = JSON.parse(transformation.kwargs);
    if (title in TRANSFORMATIONS) {
        title = TRANSFORMATIONS[title]["title"].replace(/{(\w+)}/g, function (_, k) {
            return kwargs[k];
        });
    }
    return title;
}