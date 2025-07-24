export type ValueType =
	| "enum" // static value list (e.g., "columns": { sm: ..., md: ... })
	| "number" // -[number]
	| "negative" // -[value]
	| "ratio" // aspect-ratio, etc
	| "fraction" // 1/2, 2/3, etc
	| "angle" // deg, rad, etc
	| "percentage" // -%number
	| "length" // rem, px, etc
	| "color" // -(color:--text-color)
	| "arbitrary" // [value]
	| "custom-property" // -(--my-var-a)
	| "image" // -(image:--my-image)
	| "size" // -[<size>]
	| "doubledSize" // -[<size>_<size>]
	| "mixed"; // combo pattern-based prefix/value like text-xx/[lh], etc

export type GroupType =
	| "layout"
	| "flexAndGrid"
	| "spacing"
	| "sizing"
	| "typography"
	| "backgrounds"
	| "borders"
	| "effects"
	| "filters"
	| "tables"
	| "transitionsAndAnimation"
	| "transforms"
	| "interactivity"
	| "svg"
	| "accessibility";


export interface TwClassDefinition {
	label?: string;
	prefix: string;
	classPrefix?: string;
	types?: ValueType[];
	values?: Record<string, string>; // Tetap ada kalau dia enum
	var?: string;
	important?: boolean;
	multiple?: boolean;
	group?: GroupType;
}

// If multiple prefixes (e.g., bgFrom, bgTo, bgVia): share same group & logic
export interface TwClassGroup {
	id: string; // internal key for mapping
	label?: string;
	members: TwClassDefinition[];
	types?: ValueType[]; // override value types for all members if same
}
