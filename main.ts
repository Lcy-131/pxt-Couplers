//% color=#404040 block="耦合器" icon="\uf0e8"
//% groups=['Number => any', 'Boolean => any', 'String => any', 'Array => any']
namespace couplers {
    //% blockId=makecode_ternary_operator_array block="$bool ? array $arr1 : $arr2"
    //% weight=1 advanced=true
    export function TernaryOperatorArray(bool: boolean, arr1: any[], arr2: any[]): any[]
    { return bool ? arr1 : arr2; }

    //% blockId=makecode_ternary_operator_any block="$bool ? $val1 : $val2"
    //% weight=2 advanced=true
    export function TernaryOperator(bool: boolean, val1: any, val2: any): any
    { return bool ? val1 : val2; }

    //% group='Number => any'
    //% blockId=makecode_convert_numtobool block="$num => Boolean"
    //% weight=3
    export function NumberToBoolean(num: number): boolean
    { return num >= 1; }
    //% group='Number => any'
    //% blockId=makecode_convert_numtostr block="$num => String || using $bin base"
    //% weight=2
    export function NumberToString(num: number, bin: number = 10): string
    { return num.toString() /* ('' + num) is ok */ }
    //% group='Number => any'
    //% blockId=makecode_convert_numtoarr block="$num => Array || using $bin base"
    //% weight=1
    export function NumberToArray(num: number, bin: number = 10): number[]
    { return [num]; }

    //% group='Boolean => any'
    //% blockId=makecode_convert_booltonum block="$bool => Number"
    //% weight=2
    export function BooleanToNumber(bool: boolean): number
    { return + bool; /* (bool ? 1 : 0) is ok */ }
    //% group='Boolean => any'
    //% blockId=makecode_convert_booltostr block="$bool => String"
    //% weight=1
    export function BooleanToString(bool: boolean): string
    { return bool.toString(); /* (bool ? "true" : "false") is ok */ }
}