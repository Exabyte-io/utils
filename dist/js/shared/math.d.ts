import mathjs from "mathjs";
/**
 * @summary Wrapper for native [Number.toPrecision](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_objects/Number/toPrecision) method.
 * Returns a string representing the Number object to the specified precision.
 * @locus Client
 * @method
 * @name toPrecision
 * @param number
 * @param precision Optional. An integer specifying the number of significant digits.
 */
export declare function numberToPrecision(number: number | string, precision?: number): string;
declare const _default: {
    PI: number;
    trunc: (x: number) => number;
    product: (v1: number[], v2: number[]) => number | number[];
    vlen: (v: number[]) => number;
    angle: (a: number[], b: number[], unit: string) => number;
    angleUpTo90: (a: number[], b: number[], unit: string) => number;
    vDist: (v1: number[], v2: number[]) => number | mathjs.Complex;
    vEqualWithTolerance: (vec1: number[], vec2: number[], tolerance?: number) => boolean;
    roundToZero: (n: number) => number;
    precise: (x: number, n?: number) => number;
    mod: (num: number, tolerance?: number) => number;
    isBetweenZeroInclusiveAndOne: (number: number, tolerance?: number) => boolean;
    cartesianProduct: (...arg: number[][]) => number[][];
    almostEqual: (a: number, b: number, tolerance?: number) => boolean;
    combinations: (a: number, b: number, c: number) => number[][];
    combinationsFromIntervals: (arrA: number[], arrB: number[], arrC: number[]) => number[][];
    calculateSegmentsBetweenPoints3D: (
        point1: (string | number)[],
        point2: (string | number)[],
        n: string | number,
    ) => number[][];
    roundValueToNDecimals: (value: number, decimals?: number) => number;
    numberToPrecision: typeof numberToPrecision;
    AccessorNode: mathjs.AccessorNodeCtor;
    ArrayNode: mathjs.ArrayNodeCtor;
    AssignmentNode: mathjs.AssignmentNodeCtor;
    BlockNode: mathjs.BlockNodeCtor;
    ConditionalNode: mathjs.ConditionalNodeCtor;
    ConstantNode: mathjs.ConstantNodeCtor;
    FunctionAssignmentNode: mathjs.FunctionAssignmentNodeCtor;
    FunctionNode: mathjs.FunctionNodeCtor;
    IndexNode: mathjs.IndexNodeCtor;
    ObjectNode: mathjs.ObjectNodeCtor;
    OperatorNode: mathjs.OperatorNodeCtor;
    ParenthesisNode: mathjs.ParenthesisNodeCtor;
    RangeNode: mathjs.RangeNodeCtor;
    RelationalNode: mathjs.RelationalNodeCtor;
    SymbolNode: mathjs.SymbolNodeCtor;
    all: mathjs.FactoryFunctionMap;
    typedDependencies: mathjs.FactoryFunctionMap;
    ResultSetDependencies: mathjs.FactoryFunctionMap;
    BigNumberDependencies: mathjs.FactoryFunctionMap;
    ComplexDependencies: mathjs.FactoryFunctionMap;
    FractionDependencies: mathjs.FactoryFunctionMap;
    RangeDependencies: mathjs.FactoryFunctionMap;
    MatrixDependencies: mathjs.FactoryFunctionMap;
    DenseMatrixDependencies: mathjs.FactoryFunctionMap;
    cloneDependencies: mathjs.FactoryFunctionMap;
    isIntegerDependencies: mathjs.FactoryFunctionMap;
    isNegativeDependencies: mathjs.FactoryFunctionMap;
    isNumericDependencies: mathjs.FactoryFunctionMap;
    hasNumericValueDependencies: mathjs.FactoryFunctionMap;
    isPositiveDependencies: mathjs.FactoryFunctionMap;
    isZeroDependencies: mathjs.FactoryFunctionMap;
    isNaNDependencies: mathjs.FactoryFunctionMap;
    typeOfDependencies: mathjs.FactoryFunctionMap;
    typeofDependencies: mathjs.FactoryFunctionMap;
    equalScalarDependencies: mathjs.FactoryFunctionMap;
    SparseMatrixDependencies: mathjs.FactoryFunctionMap;
    numberDependencies: mathjs.FactoryFunctionMap;
    stringDependencies: mathjs.FactoryFunctionMap;
    booleanDependencies: mathjs.FactoryFunctionMap;
    bignumberDependencies: mathjs.FactoryFunctionMap;
    complexDependencies: mathjs.FactoryFunctionMap;
    fractionDependencies: mathjs.FactoryFunctionMap;
    matrixDependencies: mathjs.FactoryFunctionMap;
    splitUnitDependencies: mathjs.FactoryFunctionMap;
    unaryMinusDependencies: mathjs.FactoryFunctionMap;
    unaryPlusDependencies: mathjs.FactoryFunctionMap;
    absDependencies: mathjs.FactoryFunctionMap;
    applyDependencies: mathjs.FactoryFunctionMap;
    addScalarDependencies: mathjs.FactoryFunctionMap;
    cbrtDependencies: mathjs.FactoryFunctionMap;
    ceilDependencies: mathjs.FactoryFunctionMap;
    cubeDependencies: mathjs.FactoryFunctionMap;
    expDependencies: mathjs.FactoryFunctionMap;
    expm1Dependencies: mathjs.FactoryFunctionMap;
    fixDependencies: mathjs.FactoryFunctionMap;
    floorDependencies: mathjs.FactoryFunctionMap;
    gcdDependencies: mathjs.FactoryFunctionMap;
    lcmDependencies: mathjs.FactoryFunctionMap;
    log10Dependencies: mathjs.FactoryFunctionMap;
    log2Dependencies: mathjs.FactoryFunctionMap;
    modDependencies: mathjs.FactoryFunctionMap;
    multiplyScalarDependencies: mathjs.FactoryFunctionMap;
    multiplyDependencies: mathjs.FactoryFunctionMap;
    nthRootDependencies: mathjs.FactoryFunctionMap;
    signDependencies: mathjs.FactoryFunctionMap;
    sqrtDependencies: mathjs.FactoryFunctionMap;
    squareDependencies: mathjs.FactoryFunctionMap;
    subtractDependencies: mathjs.FactoryFunctionMap;
    xgcdDependencies: mathjs.FactoryFunctionMap;
    dotMultiplyDependencies: mathjs.FactoryFunctionMap;
    bitAndDependencies: mathjs.FactoryFunctionMap;
    bitNotDependencies: mathjs.FactoryFunctionMap;
    bitOrDependencies: mathjs.FactoryFunctionMap;
    bitXorDependencies: mathjs.FactoryFunctionMap;
    argDependencies: mathjs.FactoryFunctionMap;
    conjDependencies: mathjs.FactoryFunctionMap;
    imDependencies: mathjs.FactoryFunctionMap;
    reDependencies: mathjs.FactoryFunctionMap;
    notDependencies: mathjs.FactoryFunctionMap;
    orDependencies: mathjs.FactoryFunctionMap;
    xorDependencies: mathjs.FactoryFunctionMap;
    concatDependencies: mathjs.FactoryFunctionMap;
    columnDependencies: mathjs.FactoryFunctionMap;
    crossDependencies: mathjs.FactoryFunctionMap;
    diagDependencies: mathjs.FactoryFunctionMap;
    eyeDependencies: mathjs.FactoryFunctionMap;
    filterDependencies: mathjs.FactoryFunctionMap;
    flattenDependencies: mathjs.FactoryFunctionMap;
    forEachDependencies: mathjs.FactoryFunctionMap;
    getMatrixDataTypeDependencies: mathjs.FactoryFunctionMap;
    identityDependencies: mathjs.FactoryFunctionMap;
    kronDependencies: mathjs.FactoryFunctionMap;
    mapDependencies: mathjs.FactoryFunctionMap;
    onesDependencies: mathjs.FactoryFunctionMap;
    rangeDependencies: mathjs.FactoryFunctionMap;
    reshapeDependencies: mathjs.FactoryFunctionMap;
    resizeDependencies: mathjs.FactoryFunctionMap;
    rowDependencies: mathjs.FactoryFunctionMap;
    sizeDependencies: mathjs.FactoryFunctionMap;
    squeezeDependencies: mathjs.FactoryFunctionMap;
    subsetDependencies: mathjs.FactoryFunctionMap;
    transposeDependencies: mathjs.FactoryFunctionMap;
    ctransposeDependencies: mathjs.FactoryFunctionMap;
    zerosDependencies: mathjs.FactoryFunctionMap;
    erfDependencies: mathjs.FactoryFunctionMap;
    modeDependencies: mathjs.FactoryFunctionMap;
    prodDependencies: mathjs.FactoryFunctionMap;
    formatDependencies: mathjs.FactoryFunctionMap;
    printDependencies: mathjs.FactoryFunctionMap;
    toDependencies: mathjs.FactoryFunctionMap;
    isPrimeDependencies: mathjs.FactoryFunctionMap;
    numericDependencies: mathjs.FactoryFunctionMap;
    divideScalarDependencies: mathjs.FactoryFunctionMap;
    powDependencies: mathjs.FactoryFunctionMap;
    roundDependencies: mathjs.FactoryFunctionMap;
    logDependencies: mathjs.FactoryFunctionMap;
    log1pDependencies: mathjs.FactoryFunctionMap;
    nthRootsDependencies: mathjs.FactoryFunctionMap;
    dotPowDependencies: mathjs.FactoryFunctionMap;
    dotDivideDependencies: mathjs.FactoryFunctionMap;
    lsolveDependencies: mathjs.FactoryFunctionMap;
    usolveDependencies: mathjs.FactoryFunctionMap;
    leftShiftDependencies: mathjs.FactoryFunctionMap;
    rightArithShiftDependencies: mathjs.FactoryFunctionMap;
    rightLogShiftDependencies: mathjs.FactoryFunctionMap;
    andDependencies: mathjs.FactoryFunctionMap;
    compareDependencies: mathjs.FactoryFunctionMap;
    compareNaturalDependencies: mathjs.FactoryFunctionMap;
    compareTextDependencies: mathjs.FactoryFunctionMap;
    equalDependencies: mathjs.FactoryFunctionMap;
    equalTextDependencies: mathjs.FactoryFunctionMap;
    smallerDependencies: mathjs.FactoryFunctionMap;
    smallerEqDependencies: mathjs.FactoryFunctionMap;
    largerDependencies: mathjs.FactoryFunctionMap;
    largerEqDependencies: mathjs.FactoryFunctionMap;
    deepEqualDependencies: mathjs.FactoryFunctionMap;
    unequalDependencies: mathjs.FactoryFunctionMap;
    partitionSelectDependencies: mathjs.FactoryFunctionMap;
    sortDependencies: mathjs.FactoryFunctionMap;
    maxDependencies: mathjs.FactoryFunctionMap;
    minDependencies: mathjs.FactoryFunctionMap;
    ImmutableDenseMatrixDependencies: mathjs.FactoryFunctionMap;
    IndexDependencies: mathjs.FactoryFunctionMap;
    FibonacciHeapDependencies: mathjs.FactoryFunctionMap;
    SpaDependencies: mathjs.FactoryFunctionMap;
    UnitDependencies: mathjs.FactoryFunctionMap;
    unitDependencies: mathjs.FactoryFunctionMap;
    sparseDependencies: mathjs.FactoryFunctionMap;
    createUnitDependencies: mathjs.FactoryFunctionMap;
    acosDependencies: mathjs.FactoryFunctionMap;
    acoshDependencies: mathjs.FactoryFunctionMap;
    acotDependencies: mathjs.FactoryFunctionMap;
    acothDependencies: mathjs.FactoryFunctionMap;
    acscDependencies: mathjs.FactoryFunctionMap;
    acschDependencies: mathjs.FactoryFunctionMap;
    asecDependencies: mathjs.FactoryFunctionMap;
    asechDependencies: mathjs.FactoryFunctionMap;
    asinDependencies: mathjs.FactoryFunctionMap;
    asinhDependencies: mathjs.FactoryFunctionMap;
    atanDependencies: mathjs.FactoryFunctionMap;
    atan2Dependencies: mathjs.FactoryFunctionMap;
    atanhDependencies: mathjs.FactoryFunctionMap;
    cosDependencies: mathjs.FactoryFunctionMap;
    coshDependencies: mathjs.FactoryFunctionMap;
    cotDependencies: mathjs.FactoryFunctionMap;
    cothDependencies: mathjs.FactoryFunctionMap;
    cscDependencies: mathjs.FactoryFunctionMap;
    cschDependencies: mathjs.FactoryFunctionMap;
    secDependencies: mathjs.FactoryFunctionMap;
    sechDependencies: mathjs.FactoryFunctionMap;
    sinDependencies: mathjs.FactoryFunctionMap;
    sinhDependencies: mathjs.FactoryFunctionMap;
    tanDependencies: mathjs.FactoryFunctionMap;
    tanhDependencies: mathjs.FactoryFunctionMap;
    setCartesianDependencies: mathjs.FactoryFunctionMap;
    setDifferenceDependencies: mathjs.FactoryFunctionMap;
    setDistinctDependencies: mathjs.FactoryFunctionMap;
    setIntersectDependencies: mathjs.FactoryFunctionMap;
    setIsSubsetDependencies: mathjs.FactoryFunctionMap;
    setMultiplicityDependencies: mathjs.FactoryFunctionMap;
    setPowersetDependencies: mathjs.FactoryFunctionMap;
    setSizeDependencies: mathjs.FactoryFunctionMap;
    setSymDifferenceDependencies: mathjs.FactoryFunctionMap;
    setUnionDependencies: mathjs.FactoryFunctionMap;
    zpk2tfDependencies: mathjs.FactoryFunctionMap;
    freqzDependencies: mathjs.FactoryFunctionMap;
    addDependencies: mathjs.FactoryFunctionMap;
    hypotDependencies: mathjs.FactoryFunctionMap;
    normDependencies: mathjs.FactoryFunctionMap;
    dotDependencies: mathjs.FactoryFunctionMap;
    traceDependencies: mathjs.FactoryFunctionMap;
    indexDependencies: mathjs.FactoryFunctionMap;
    NodeDependencies: mathjs.FactoryFunctionMap;
    AccessorNodeDependencies: mathjs.FactoryFunctionMap;
    ArrayNodeDependencies: mathjs.FactoryFunctionMap;
    AssignmentNodeDependencies: mathjs.FactoryFunctionMap;
    BlockNodeDependencies: mathjs.FactoryFunctionMap;
    ConditionalNodeDependencies: mathjs.FactoryFunctionMap;
    ConstantNodeDependencies: mathjs.FactoryFunctionMap;
    FunctionAssignmentNodeDependencies: mathjs.FactoryFunctionMap;
    IndexNodeDependencies: mathjs.FactoryFunctionMap;
    ObjectNodeDependencies: mathjs.FactoryFunctionMap;
    OperatorNodeDependencies: mathjs.FactoryFunctionMap;
    ParenthesisNodeDependencies: mathjs.FactoryFunctionMap;
    RangeNodeDependencies: mathjs.FactoryFunctionMap;
    RelationalNodeDependencies: mathjs.FactoryFunctionMap;
    SymbolNodeDependencies: mathjs.FactoryFunctionMap;
    FunctionNodeDependencies: mathjs.FactoryFunctionMap;
    parseDependencies: mathjs.FactoryFunctionMap;
    compileDependencies: mathjs.FactoryFunctionMap;
    evaluateDependencies: mathjs.FactoryFunctionMap;
    evalDependencies: mathjs.FactoryFunctionMap;
    ParserDependencies: mathjs.FactoryFunctionMap;
    parserDependencies: mathjs.FactoryFunctionMap;
    lupDependencies: mathjs.FactoryFunctionMap;
    qrDependencies: mathjs.FactoryFunctionMap;
    sluDependencies: mathjs.FactoryFunctionMap;
    lusolveDependencies: mathjs.FactoryFunctionMap;
    HelpDependencies: mathjs.FactoryFunctionMap;
    ChainDependencies: mathjs.FactoryFunctionMap;
    helpDependencies: mathjs.FactoryFunctionMap;
    chainDependencies: mathjs.FactoryFunctionMap;
    detDependencies: mathjs.FactoryFunctionMap;
    invDependencies: mathjs.FactoryFunctionMap;
    expmDependencies: mathjs.FactoryFunctionMap;
    sqrtmDependencies: mathjs.FactoryFunctionMap;
    sylvesterDependencies: mathjs.FactoryFunctionMap;
    schurDependencies: mathjs.FactoryFunctionMap;
    lyapDependencies: mathjs.FactoryFunctionMap;
    divideDependencies: mathjs.FactoryFunctionMap;
    distanceDependencies: mathjs.FactoryFunctionMap;
    intersectDependencies: mathjs.FactoryFunctionMap;
    sumDependencies: mathjs.FactoryFunctionMap;
    meanDependencies: mathjs.FactoryFunctionMap;
    medianDependencies: mathjs.FactoryFunctionMap;
    madDependencies: mathjs.FactoryFunctionMap;
    varianceDependencies: mathjs.FactoryFunctionMap;
    varDependencies: mathjs.FactoryFunctionMap;
    quantileSeqDependencies: mathjs.FactoryFunctionMap;
    stdDependencies: mathjs.FactoryFunctionMap;
    combinationsDependencies: mathjs.FactoryFunctionMap;
    gammaDependencies: mathjs.FactoryFunctionMap;
    factorialDependencies: mathjs.FactoryFunctionMap;
    kldivergenceDependencies: mathjs.FactoryFunctionMap;
    multinomialDependencies: mathjs.FactoryFunctionMap;
    permutationsDependencies: mathjs.FactoryFunctionMap;
    pickRandomDependencies: mathjs.FactoryFunctionMap;
    randomDependencies: mathjs.FactoryFunctionMap;
    randomIntDependencies: mathjs.FactoryFunctionMap;
    stirlingS2Dependencies: mathjs.FactoryFunctionMap;
    bellNumbersDependencies: mathjs.FactoryFunctionMap;
    catalanDependencies: mathjs.FactoryFunctionMap;
    compositionDependencies: mathjs.FactoryFunctionMap;
    simplifyDependencies: mathjs.FactoryFunctionMap;
    derivativeDependencies: mathjs.FactoryFunctionMap;
    rationalizeDependencies: mathjs.FactoryFunctionMap;
    reviverDependencies: mathjs.FactoryFunctionMap;
    eDependencies: mathjs.FactoryFunctionMap;
    EDependencies: mathjs.FactoryFunctionMap;
    falseDependencies: mathjs.FactoryFunctionMap;
    iDependencies: mathjs.FactoryFunctionMap;
    InfinityDependencies: mathjs.FactoryFunctionMap;
    LN10Dependencies: mathjs.FactoryFunctionMap;
    LN2Dependencies: mathjs.FactoryFunctionMap;
    LOG10EDependencies: mathjs.FactoryFunctionMap;
    LOG2EDependencies: mathjs.FactoryFunctionMap;
    NaNDependencies: mathjs.FactoryFunctionMap;
    nullDependencies: mathjs.FactoryFunctionMap;
    phiDependencies: mathjs.FactoryFunctionMap;
    piDependencies: mathjs.FactoryFunctionMap;
    PIDependencies: mathjs.FactoryFunctionMap;
    SQRT1_2Dependencies: mathjs.FactoryFunctionMap;
    SQRT2Dependencies: mathjs.FactoryFunctionMap;
    tauDependencies: mathjs.FactoryFunctionMap;
    trueDependencies: mathjs.FactoryFunctionMap;
    versionDependencies: mathjs.FactoryFunctionMap;
    atomicMassDependencies: mathjs.FactoryFunctionMap;
    avogadroDependencies: mathjs.FactoryFunctionMap;
    bohrMagnetonDependencies: mathjs.FactoryFunctionMap;
    bohrRadiusDependencies: mathjs.FactoryFunctionMap;
    boltzmannDependencies: mathjs.FactoryFunctionMap;
    classicalElectronRadiusDependencies: mathjs.FactoryFunctionMap;
    conductanceQuantumDependencies: mathjs.FactoryFunctionMap;
    coulombDependencies: mathjs.FactoryFunctionMap;
    deuteronMassDependencies: mathjs.FactoryFunctionMap;
    efimovFactorDependencies: mathjs.FactoryFunctionMap;
    electricConstantDependencies: mathjs.FactoryFunctionMap;
    electronMassDependencies: mathjs.FactoryFunctionMap;
    elementaryChargeDependencies: mathjs.FactoryFunctionMap;
    faradayDependencies: mathjs.FactoryFunctionMap;
    fermiCouplingDependencies: mathjs.FactoryFunctionMap;
    fineStructureDependencies: mathjs.FactoryFunctionMap;
    firstRadiationDependencies: mathjs.FactoryFunctionMap;
    gasConstantDependencies: mathjs.FactoryFunctionMap;
    gravitationConstantDependencies: mathjs.FactoryFunctionMap;
    gravityDependencies: mathjs.FactoryFunctionMap;
    hartreeEnergyDependencies: mathjs.FactoryFunctionMap;
    inverseConductanceQuantumDependencies: mathjs.FactoryFunctionMap;
    klitzingDependencies: mathjs.FactoryFunctionMap;
    loschmidtDependencies: mathjs.FactoryFunctionMap;
    magneticConstantDependencies: mathjs.FactoryFunctionMap;
    magneticFluxQuantumDependencies: mathjs.FactoryFunctionMap;
    molarMassDependencies: mathjs.FactoryFunctionMap;
    molarMassC12Dependencies: mathjs.FactoryFunctionMap;
    molarPlanckConstantDependencies: mathjs.FactoryFunctionMap;
    molarVolumeDependencies: mathjs.FactoryFunctionMap;
    neutronMassDependencies: mathjs.FactoryFunctionMap;
    nuclearMagnetonDependencies: mathjs.FactoryFunctionMap;
    planckChargeDependencies: mathjs.FactoryFunctionMap;
    planckConstantDependencies: mathjs.FactoryFunctionMap;
    planckLengthDependencies: mathjs.FactoryFunctionMap;
    planckMassDependencies: mathjs.FactoryFunctionMap;
    planckTemperatureDependencies: mathjs.FactoryFunctionMap;
    planckTimeDependencies: mathjs.FactoryFunctionMap;
    protonMassDependencies: mathjs.FactoryFunctionMap;
    quantumOfCirculationDependencies: mathjs.FactoryFunctionMap;
    reducedPlanckConstantDependencies: mathjs.FactoryFunctionMap;
    rydbergDependencies: mathjs.FactoryFunctionMap;
    sackurTetrodeDependencies: mathjs.FactoryFunctionMap;
    secondRadiationDependencies: mathjs.FactoryFunctionMap;
    speedOfLightDependencies: mathjs.FactoryFunctionMap;
    stefanBoltzmannDependencies: mathjs.FactoryFunctionMap;
    thomsonCrossSectionDependencies: mathjs.FactoryFunctionMap;
    vacuumImpedanceDependencies: mathjs.FactoryFunctionMap;
    weakMixingAngleDependencies: mathjs.FactoryFunctionMap;
    wienDisplacementDependencies: mathjs.FactoryFunctionMap;
    applyTransformDependencies: mathjs.FactoryFunctionMap;
    columnTransformDependencies: mathjs.FactoryFunctionMap;
    filterTransformDependencies: mathjs.FactoryFunctionMap;
    forEachTransformDependencies: mathjs.FactoryFunctionMap;
    indexTransformDependencies: mathjs.FactoryFunctionMap;
    mapTransformDependencies: mathjs.FactoryFunctionMap;
    maxTransformDependencies: mathjs.FactoryFunctionMap;
    meanTransformDependencies: mathjs.FactoryFunctionMap;
    minTransformDependencies: mathjs.FactoryFunctionMap;
    rangeTransformDependencies: mathjs.FactoryFunctionMap;
    rowTransformDependencies: mathjs.FactoryFunctionMap;
    subsetTransformDependencies: mathjs.FactoryFunctionMap;
    concatTransformDependencies: mathjs.FactoryFunctionMap;
    stdTransformDependencies: mathjs.FactoryFunctionMap;
    sumTransformDependencies: mathjs.FactoryFunctionMap;
    varianceTransformDependencies: mathjs.FactoryFunctionMap;
    Matrix: mathjs.MatrixCtor;
    create: (
        factories: mathjs.FactoryFunctionMap,
        config?: mathjs.ConfigOptions | undefined,
    ) => mathjs.MathJsInstance;
    factory: <T, TDeps extends readonly (keyof mathjs.MathJsInstance)[]>(
        name: string,
        dependencies: TDeps,
        create: (
            injected: Pick<
                mathjs.MathJsInstance,
                | Extract<"string", TDeps[number]>
                | Extract<"number", TDeps[number]>
                | Extract<"boolean", TDeps[number]>
                | Extract<"concat", TDeps[number]>
                | Extract<"sort", TDeps[number]>
                | Extract<"forEach", TDeps[number]>
                | Extract<"map", TDeps[number]>
                | Extract<"filter", TDeps[number]>
                | Extract<"AccessorNode", TDeps[number]>
                | Extract<"ArrayNode", TDeps[number]>
                | Extract<"AssignmentNode", TDeps[number]>
                | Extract<"BlockNode", TDeps[number]>
                | Extract<"ConditionalNode", TDeps[number]>
                | Extract<"ConstantNode", TDeps[number]>
                | Extract<"FunctionAssignmentNode", TDeps[number]>
                | Extract<"FunctionNode", TDeps[number]>
                | Extract<"IndexNode", TDeps[number]>
                | Extract<"ObjectNode", TDeps[number]>
                | Extract<"OperatorNode", TDeps[number]>
                | Extract<"ParenthesisNode", TDeps[number]>
                | Extract<"RangeNode", TDeps[number]>
                | Extract<"RelationalNode", TDeps[number]>
                | Extract<"SymbolNode", TDeps[number]>
                | Extract<"Matrix", TDeps[number]>
                | Extract<"create", TDeps[number]>
                | Extract<"factory", TDeps[number]>
                | Extract<"typed", TDeps[number]>
                | Extract<"e", TDeps[number]>
                | Extract<"pi", TDeps[number]>
                | Extract<"i", TDeps[number]>
                | Extract<"LN2", TDeps[number]>
                | Extract<"LN10", TDeps[number]>
                | Extract<"LOG2E", TDeps[number]>
                | Extract<"LOG10E", TDeps[number]>
                | Extract<"phi", TDeps[number]>
                | Extract<"SQRT1_2", TDeps[number]>
                | Extract<"SQRT2", TDeps[number]>
                | Extract<"tau", TDeps[number]>
                | Extract<"Node", TDeps[number]>
                | Extract<"uninitialized", TDeps[number]>
                | Extract<"version", TDeps[number]>
                | Extract<"expression", TDeps[number]>
                | Extract<"reviver", TDeps[number]>
                | Extract<"replacer", TDeps[number]>
                | Extract<"bignumber", TDeps[number]>
                | Extract<"chain", TDeps[number]>
                | Extract<"complex", TDeps[number]>
                | Extract<"createUnit", TDeps[number]>
                | Extract<"fraction", TDeps[number]>
                | Extract<"index", TDeps[number]>
                | Extract<"matrix", TDeps[number]>
                | Extract<"sparse", TDeps[number]>
                | Extract<"splitUnit", TDeps[number]>
                | Extract<"unit", TDeps[number]>
                | Extract<"compile", TDeps[number]>
                | Extract<"evaluate", TDeps[number]>
                | Extract<"help", TDeps[number]>
                | Extract<"parse", TDeps[number]>
                | Extract<"parser", TDeps[number]>
                | Extract<"derivative", TDeps[number]>
                | Extract<"lsolve", TDeps[number]>
                | Extract<"lup", TDeps[number]>
                | Extract<"lusolve", TDeps[number]>
                | Extract<"polynomialRoot", TDeps[number]>
                | Extract<"qr", TDeps[number]>
                | Extract<"rationalize", TDeps[number]>
                | Extract<"simplify", TDeps[number]>
                | Extract<"simplifyConstant", TDeps[number]>
                | Extract<"simplifyCore", TDeps[number]>
                | Extract<"resolve", TDeps[number]>
                | Extract<"slu", TDeps[number]>
                | Extract<"usolve", TDeps[number]>
                | Extract<"abs", TDeps[number]>
                | Extract<"add", TDeps[number]>
                | Extract<"cbrt", TDeps[number]>
                | Extract<"ceil", TDeps[number]>
                | Extract<"fix", TDeps[number]>
                | Extract<"floor", TDeps[number]>
                | Extract<"round", TDeps[number]>
                | Extract<"cube", TDeps[number]>
                | Extract<"divide", TDeps[number]>
                | Extract<"dotDivide", TDeps[number]>
                | Extract<"dotMultiply", TDeps[number]>
                | Extract<"dotPow", TDeps[number]>
                | Extract<"exp", TDeps[number]>
                | Extract<"expm1", TDeps[number]>
                | Extract<"gcd", TDeps[number]>
                | Extract<"hypot", TDeps[number]>
                | Extract<"lcm", TDeps[number]>
                | Extract<"log", TDeps[number]>
                | Extract<"log10", TDeps[number]>
                | Extract<"log1p", TDeps[number]>
                | Extract<"log2", TDeps[number]>
                | Extract<"mod", TDeps[number]>
                | Extract<"multiply", TDeps[number]>
                | Extract<"norm", TDeps[number]>
                | Extract<"nthRoot", TDeps[number]>
                | Extract<"pow", TDeps[number]>
                | Extract<"sign", TDeps[number]>
                | Extract<"sqrt", TDeps[number]>
                | Extract<"square", TDeps[number]>
                | Extract<"subtract", TDeps[number]>
                | Extract<"unaryMinus", TDeps[number]>
                | Extract<"unaryPlus", TDeps[number]>
                | Extract<"xgcd", TDeps[number]>
                | Extract<"bitAnd", TDeps[number]>
                | Extract<"bitNot", TDeps[number]>
                | Extract<"bitOr", TDeps[number]>
                | Extract<"bitXor", TDeps[number]>
                | Extract<"leftShift", TDeps[number]>
                | Extract<"rightArithShift", TDeps[number]>
                | Extract<"rightLogShift", TDeps[number]>
                | Extract<"bellNumbers", TDeps[number]>
                | Extract<"catalan", TDeps[number]>
                | Extract<"composition", TDeps[number]>
                | Extract<"stirlingS2", TDeps[number]>
                | Extract<"arg", TDeps[number]>
                | Extract<"conj", TDeps[number]>
                | Extract<"im", TDeps[number]>
                | Extract<"re", TDeps[number]>
                | Extract<"distance", TDeps[number]>
                | Extract<"intersect", TDeps[number]>
                | Extract<"and", TDeps[number]>
                | Extract<"not", TDeps[number]>
                | Extract<"or", TDeps[number]>
                | Extract<"xor", TDeps[number]>
                | Extract<"apply", TDeps[number]>
                | Extract<"cross", TDeps[number]>
                | Extract<"det", TDeps[number]>
                | Extract<"diag", TDeps[number]>
                | Extract<"dot", TDeps[number]>
                | Extract<"eigs", TDeps[number]>
                | Extract<"expm", TDeps[number]>
                | Extract<"sylvester", TDeps[number]>
                | Extract<"schur", TDeps[number]>
                | Extract<"lyap", TDeps[number]>
                | Extract<"identity", TDeps[number]>
                | Extract<"flatten", TDeps[number]>
                | Extract<"inv", TDeps[number]>
                | Extract<"kron", TDeps[number]>
                | Extract<"ones", TDeps[number]>
                | Extract<"partitionSelect", TDeps[number]>
                | Extract<"pinv", TDeps[number]>
                | Extract<"range", TDeps[number]>
                | Extract<"reshape", TDeps[number]>
                | Extract<"resize", TDeps[number]>
                | Extract<"rotationMatrix", TDeps[number]>
                | Extract<"row", TDeps[number]>
                | Extract<"column", TDeps[number]>
                | Extract<"rotate", TDeps[number]>
                | Extract<"size", TDeps[number]>
                | Extract<"sqrtm", TDeps[number]>
                | Extract<"squeeze", TDeps[number]>
                | Extract<"subset", TDeps[number]>
                | Extract<"trace", TDeps[number]>
                | Extract<"transpose", TDeps[number]>
                | Extract<"zeros", TDeps[number]>
                | Extract<"fft", TDeps[number]>
                | Extract<"ifft", TDeps[number]>
                | Extract<"combinations", TDeps[number]>
                | Extract<"factorial", TDeps[number]>
                | Extract<"gamma", TDeps[number]>
                | Extract<"kldivergence", TDeps[number]>
                | Extract<"lgamma", TDeps[number]>
                | Extract<"multinomial", TDeps[number]>
                | Extract<"permutations", TDeps[number]>
                | Extract<"pickRandom", TDeps[number]>
                | Extract<"random", TDeps[number]>
                | Extract<"randomInt", TDeps[number]>
                | Extract<"compare", TDeps[number]>
                | Extract<"compareNatural", TDeps[number]>
                | Extract<"compareText", TDeps[number]>
                | Extract<"deepEqual", TDeps[number]>
                | Extract<"equal", TDeps[number]>
                | Extract<"equalText", TDeps[number]>
                | Extract<"larger", TDeps[number]>
                | Extract<"largerEq", TDeps[number]>
                | Extract<"smaller", TDeps[number]>
                | Extract<"smallerEq", TDeps[number]>
                | Extract<"unequal", TDeps[number]>
                | Extract<"setCartesian", TDeps[number]>
                | Extract<"setDifference", TDeps[number]>
                | Extract<"setDistinct", TDeps[number]>
                | Extract<"setIntersect", TDeps[number]>
                | Extract<"setIsSubset", TDeps[number]>
                | Extract<"setMultiplicity", TDeps[number]>
                | Extract<"setPowerset", TDeps[number]>
                | Extract<"setSize", TDeps[number]>
                | Extract<"setSymDifference", TDeps[number]>
                | Extract<"setUnion", TDeps[number]>
                | Extract<"zpk2tf", TDeps[number]>
                | Extract<"freqz", TDeps[number]>
                | Extract<"erf", TDeps[number]>
                | Extract<"zeta", TDeps[number]>
                | Extract<"mad", TDeps[number]>
                | Extract<"max", TDeps[number]>
                | Extract<"mean", TDeps[number]>
                | Extract<"median", TDeps[number]>
                | Extract<"min", TDeps[number]>
                | Extract<"mode", TDeps[number]>
                | Extract<"prod", TDeps[number]>
                | Extract<"quantileSeq", TDeps[number]>
                | Extract<"std", TDeps[number]>
                | Extract<"sum", TDeps[number]>
                | Extract<"count", TDeps[number]>
                | Extract<"cumsum", TDeps[number]>
                | Extract<"variance", TDeps[number]>
                | Extract<"corr", TDeps[number]>
                | Extract<"format", TDeps[number]>
                | Extract<"print", TDeps[number]>
                | Extract<"acos", TDeps[number]>
                | Extract<"acosh", TDeps[number]>
                | Extract<"acot", TDeps[number]>
                | Extract<"acoth", TDeps[number]>
                | Extract<"acsc", TDeps[number]>
                | Extract<"acsch", TDeps[number]>
                | Extract<"asec", TDeps[number]>
                | Extract<"asech", TDeps[number]>
                | Extract<"asin", TDeps[number]>
                | Extract<"asinh", TDeps[number]>
                | Extract<"atan", TDeps[number]>
                | Extract<"atan2", TDeps[number]>
                | Extract<"atanh", TDeps[number]>
                | Extract<"cos", TDeps[number]>
                | Extract<"cosh", TDeps[number]>
                | Extract<"cot", TDeps[number]>
                | Extract<"coth", TDeps[number]>
                | Extract<"csc", TDeps[number]>
                | Extract<"csch", TDeps[number]>
                | Extract<"sec", TDeps[number]>
                | Extract<"sech", TDeps[number]>
                | Extract<"sin", TDeps[number]>
                | Extract<"sinh", TDeps[number]>
                | Extract<"tan", TDeps[number]>
                | Extract<"tanh", TDeps[number]>
                | Extract<"to", TDeps[number]>
                | Extract<"isNumber", TDeps[number]>
                | Extract<"isBigNumber", TDeps[number]>
                | Extract<"isComplex", TDeps[number]>
                | Extract<"isFraction", TDeps[number]>
                | Extract<"isUnit", TDeps[number]>
                | Extract<"isString", TDeps[number]>
                | Extract<"isArray", TDeps[number]>
                | Extract<"isMatrix", TDeps[number]>
                | Extract<"isCollection", TDeps[number]>
                | Extract<"isDenseMatrix", TDeps[number]>
                | Extract<"isSparseMatrix", TDeps[number]>
                | Extract<"isRange", TDeps[number]>
                | Extract<"isIndex", TDeps[number]>
                | Extract<"isBoolean", TDeps[number]>
                | Extract<"isResultSet", TDeps[number]>
                | Extract<"isHelp", TDeps[number]>
                | Extract<"isFunction", TDeps[number]>
                | Extract<"isDate", TDeps[number]>
                | Extract<"isRegExp", TDeps[number]>
                | Extract<"isObject", TDeps[number]>
                | Extract<"isNull", TDeps[number]>
                | Extract<"isUndefined", TDeps[number]>
                | Extract<"isAccessorNode", TDeps[number]>
                | Extract<"isArrayNode", TDeps[number]>
                | Extract<"isAssignmentNode", TDeps[number]>
                | Extract<"isBlockNode", TDeps[number]>
                | Extract<"isConditionalNode", TDeps[number]>
                | Extract<"isConstantNode", TDeps[number]>
                | Extract<"isFunctionAssignmentNode", TDeps[number]>
                | Extract<"isFunctionNode", TDeps[number]>
                | Extract<"isIndexNode", TDeps[number]>
                | Extract<"isNode", TDeps[number]>
                | Extract<"isObjectNode", TDeps[number]>
                | Extract<"isOperatorNode", TDeps[number]>
                | Extract<"isParenthesisNode", TDeps[number]>
                | Extract<"isRangeNode", TDeps[number]>
                | Extract<"isRelationalNode", TDeps[number]>
                | Extract<"isSymbolNode", TDeps[number]>
                | Extract<"isChain", TDeps[number]>
                | Extract<"clone", TDeps[number]>
                | Extract<"hasNumericValue", TDeps[number]>
                | Extract<"isInteger", TDeps[number]>
                | Extract<"isNaN", TDeps[number]>
                | Extract<"isNegative", TDeps[number]>
                | Extract<"isNumeric", TDeps[number]>
                | Extract<"isPositive", TDeps[number]>
                | Extract<"isPrime", TDeps[number]>
                | Extract<"isZero", TDeps[number]>
                | Extract<"typeOf", TDeps[number]>
                | Extract<"Infinity", TDeps[number]>
                | Extract<"NaN", TDeps[number]>
                | Extract<"config", TDeps[number]>
                | Extract<"symbolicEqual", TDeps[number]>
                | Extract<"import", TDeps[number]>
            >,
        ) => T,
        meta?: any,
    ) => mathjs.FactoryFunction<T>;
    typed: (
        name: string,
        signatures: Record<string, (...args: any[]) => any>,
    ) => (...args: any[]) => any;
    e: number;
    pi: number;
    i: number;
    LN2: number;
    LN10: number;
    LOG2E: number;
    LOG10E: number;
    phi: number;
    SQRT1_2: number;
    SQRT2: number;
    tau: number;
    Node: mathjs.NodeCtor;
    uninitialized: any;
    version: string;
    expression: mathjs.MathNode;
    reviver: () => (key: any, value: any) => any;
    replacer: () => (key: any, value: any) => any;
    bignumber: {
        (
            x?:
                | string
                | number
                | boolean
                | mathjs.BigNumber
                | mathjs.Fraction
                | mathjs.Unit
                | null
                | undefined,
        ): mathjs.BigNumber;
        <T_1 extends mathjs.MathCollection>(x: T_1): T_1;
    };
    boolean: {
        (x: string | number | boolean | null): boolean;
        (x: mathjs.MathCollection): mathjs.MathCollection;
    };
    chain: <TValue>(value?: TValue | undefined) => mathjs.MathJsChain<TValue>;
    complex: {
        (
            arg?: string | mathjs.MathNumericType | mathjs.PolarCoordinates | undefined,
        ): mathjs.Complex;
        (arg?: mathjs.MathCollection | undefined): mathjs.MathCollection;
        (re: number, im: number): mathjs.Complex;
    };
    createUnit: {
        (
            name: string,
            definition?: string | mathjs.Unit | mathjs.UnitDefinition | undefined,
            options?: mathjs.CreateUnitOptions | undefined,
        ): mathjs.Unit;
        (
            units: Record<string, string | mathjs.Unit | mathjs.UnitDefinition>,
            options?: mathjs.CreateUnitOptions | undefined,
        ): mathjs.Unit;
    };
    fraction: {
        (
            value:
                | string
                | number
                | mathjs.BigNumber
                | mathjs.Fraction
                | mathjs.Unit
                | mathjs.FractionDefinition,
        ): mathjs.Fraction;
        (values: mathjs.MathCollection): mathjs.MathCollection;
        (numerator: number, denominator: number): mathjs.Fraction;
    };
    index: (...ranges: any[]) => mathjs.Index;
    matrix: {
        (format?: "sparse" | "dense" | undefined): mathjs.Matrix;
        (
            data: string[] | mathjs.MathCollection,
            format?: "sparse" | "dense" | undefined,
            dataType?: string | undefined,
        ): mathjs.Matrix;
    };
    number: {
        (
            value?:
                | string
                | number
                | boolean
                | mathjs.BigNumber
                | mathjs.Fraction
                | mathjs.Unit
                | null
                | undefined,
        ): number;
        (value?: mathjs.MathCollection | undefined): number | mathjs.MathCollection;
        (unit: mathjs.Unit, valuelessUnit: string | mathjs.Unit): number;
    };
    sparse: (
        data?: mathjs.MathCollection | undefined,
        dataType?: string | undefined,
    ) => mathjs.Matrix;
    splitUnit: (unit: mathjs.Unit, parts: mathjs.Unit[]) => mathjs.Unit[];
    string: {
        (value: string | mathjs.MathNumericType | mathjs.Unit | null): string;
        (value: mathjs.MathCollection): mathjs.MathCollection;
    };
    unit: {
        (unit: string): mathjs.Unit;
        (unit: mathjs.Unit): mathjs.Unit;
        (value: mathjs.MathNumericType, unit: string): mathjs.Unit;
        (value: mathjs.MathCollection, unit: string): mathjs.Unit[];
    };
    compile: {
        (expr: mathjs.MathExpression): mathjs.EvalFunction;
        (exprs: mathjs.MathExpression[]): mathjs.EvalFunction[];
    };
    evaluate: {
        (expr: mathjs.MathExpression, scope?: object | undefined): any;
        (expr: mathjs.MathExpression[], scope?: object | undefined): any[];
    };
    help: (search: () => any) => mathjs.Help;
    parse: mathjs.ParseFunction;
    parser: () => mathjs.Parser;
    derivative: (
        expr: string | mathjs.MathNode,
        variable: string | mathjs.MathNode,
        options?:
            | {
                  simplify: boolean;
              }
            | undefined,
    ) => mathjs.MathNode;
    lsolve: {
        (L: mathjs.Matrix, b: mathjs.MathCollection): mathjs.Matrix;
        (L: mathjs.MathArray, b: mathjs.MathCollection): mathjs.MathArray;
    };
    lup: (A?: mathjs.MathCollection | undefined) => mathjs.LUDecomposition;
    lusolve: {
        (
            A: mathjs.Matrix,
            b: mathjs.MathCollection,
            order?: number | undefined,
            threshold?: number | undefined,
        ): mathjs.Matrix;
        (
            A: mathjs.MathArray,
            b: mathjs.MathCollection,
            order?: number | undefined,
            threshold?: number | undefined,
        ): mathjs.MathArray;
        (A: mathjs.LUDecomposition, b: mathjs.MathCollection): mathjs.Matrix;
    };
    polynomialRoot: (
        constantCoeff: number | mathjs.Complex,
        linearCoeff: number | mathjs.Complex,
        quadraticCoeff?: number | mathjs.Complex | undefined,
        cubicCoeff?: number | mathjs.Complex | undefined,
    ) => (number | mathjs.Complex)[];
    qr: (A: mathjs.MathCollection) => mathjs.QRDecomposition;
    rationalize: {
        (
            expr: string | mathjs.MathNode,
            optional?: boolean | object | undefined,
            detailed?: false | undefined,
        ): mathjs.MathNode;
        (
            expr: string | mathjs.MathNode,
            optional?: boolean | object | undefined,
            detailed?: true | undefined,
        ): {
            expression: string | mathjs.MathNode;
            variables: string[];
            coefficients: mathjs.MathType[];
        };
    };
    simplify: mathjs.Simplify;
    simplifyConstant: (
        expr: string | mathjs.MathNode,
        options?: mathjs.SimplifyOptions | undefined,
    ) => mathjs.MathNode;
    simplifyCore: (
        expr: string | mathjs.MathNode,
        options?: mathjs.SimplifyOptions | undefined,
    ) => mathjs.MathNode;
    resolve: {
        (node: string | mathjs.MathNode, scope?: Record<string, any> | undefined): mathjs.MathNode;
        (
            node: (string | mathjs.MathNode)[],
            scope?: Record<string, any> | undefined,
        ): mathjs.MathNode[];
        (node: mathjs.Matrix, scope?: Record<string, any> | undefined): mathjs.Matrix;
    };
    slu: (A: mathjs.Matrix, order: number, threshold: number) => mathjs.SLUDecomposition;
    usolve: {
        (U: mathjs.Matrix, b: mathjs.MathCollection): mathjs.Matrix;
        (U: mathjs.MathArray, b: mathjs.MathCollection): mathjs.MathArray;
    };
    abs: <T_2 extends mathjs.MathType>(x: T_2) => T_2;
    add: {
        <T_3 extends mathjs.MathType>(x: T_3, y: T_3): T_3;
        (x: mathjs.MathType, y: mathjs.MathType): mathjs.MathType;
    };
    cbrt: {
        (x: mathjs.Complex, allRoots?: boolean | undefined): mathjs.Complex;
        <T_4 extends number | mathjs.BigNumber | mathjs.Unit>(x: T_4): T_4;
    };
    ceil: {
        <T_5 extends mathjs.MathNumericType | mathjs.MathCollection>(
            x: T_5,
            n?: number | mathjs.BigNumber | undefined,
        ): mathjs.NoLiteralType<T_5>;
        <U extends mathjs.MathCollection>(x: mathjs.MathNumericType, n: U): U;
    };
    fix: {
        <T_6 extends mathjs.MathNumericType | mathjs.MathCollection>(
            x: T_6,
            n?: number | mathjs.BigNumber | undefined,
        ): mathjs.NoLiteralType<T_6>;
        <U_1 extends mathjs.MathCollection>(x: mathjs.MathNumericType, n: U_1): U_1;
    };
    floor: {
        <T_7 extends mathjs.MathNumericType | mathjs.MathCollection>(
            x: T_7,
            n?: number | mathjs.BigNumber | undefined,
        ): mathjs.NoLiteralType<T_7>;
        <U_2 extends mathjs.MathCollection>(x: mathjs.MathNumericType, n: U_2): U_2;
    };
    round: {
        <T_8 extends mathjs.MathNumericType | mathjs.MathCollection>(
            x: T_8,
            n?: number | mathjs.BigNumber | undefined,
        ): mathjs.NoLiteralType<T_8>;
        <U_3 extends mathjs.MathCollection>(x: mathjs.MathNumericType, n: U_3): U_3;
        <U_4 extends mathjs.MathCollection>(x: U_4, unit: mathjs.Unit): U_4;
        (x: mathjs.Unit, unit: mathjs.Unit): mathjs.Unit;
        (x: mathjs.Unit, n: number | mathjs.BigNumber, unit: mathjs.Unit): mathjs.Unit;
        <U_5 extends mathjs.MathCollection>(
            x: U_5,
            n: number | mathjs.BigNumber,
            unit: mathjs.Unit,
        ): U_5;
    };
    cube: <T_9 extends mathjs.MathNumericType | mathjs.Unit>(x: T_9) => T_9;
    divide: {
        (x: mathjs.Unit, y: mathjs.Unit): number | mathjs.Unit;
        (x: mathjs.Unit, y: number): mathjs.Unit;
        (x: number, y: number): number;
        (x: mathjs.MathType, y: mathjs.MathType): mathjs.MathType;
    };
    dotDivide: {
        <T_10 extends mathjs.MathCollection>(x: T_10, y: mathjs.MathType): T_10;
        <T_11 extends mathjs.MathCollection>(x: mathjs.MathType, y: T_11): T_11;
        (x: mathjs.Unit, y: mathjs.MathType): mathjs.Unit;
        (x: mathjs.MathType, y: mathjs.Unit): mathjs.Unit;
        (x: mathjs.MathNumericType, y: mathjs.MathNumericType): mathjs.MathNumericType;
    };
    dotMultiply: {
        <T_12 extends mathjs.MathCollection>(x: T_12, y: mathjs.MathType): T_12;
        <T_13 extends mathjs.MathCollection>(x: mathjs.MathType, y: T_13): T_13;
        (x: mathjs.Unit, y: mathjs.MathType): mathjs.Unit;
        (x: mathjs.MathType, y: mathjs.Unit): mathjs.Unit;
        (x: mathjs.MathNumericType, y: mathjs.MathNumericType): mathjs.MathNumericType;
    };
    dotPow: <T_14 extends mathjs.MathType>(x: T_14, y: mathjs.MathType) => T_14;
    exp: <T_15 extends number | mathjs.Complex | mathjs.BigNumber>(x: T_15) => T_15;
    expm1: <T_16 extends number | mathjs.Complex | mathjs.BigNumber>(x: T_16) => T_16;
    gcd: {
        <T_17 extends number | mathjs.BigNumber | mathjs.Fraction | mathjs.MathCollection>(
            ...args: T_17[]
        ): T_17;
        <T_18 extends number | mathjs.BigNumber | mathjs.Fraction | mathjs.Matrix>(
            args: T_18[],
        ): T_18;
    };
    hypot: {
        <T_19 extends number | mathjs.BigNumber>(...args: T_19[]): T_19;
        <T_20 extends number | mathjs.BigNumber>(args: T_20[]): T_20;
    };
    lcm: <T_21 extends number | mathjs.BigNumber | mathjs.MathCollection>(a: T_21, b: T_21) => T_21;
    log: <T_22 extends number | mathjs.Complex | mathjs.BigNumber>(
        x: T_22,
        base?: number | mathjs.Complex | mathjs.BigNumber | undefined,
    ) => mathjs.NoLiteralType<T_22>;
    log10: <T_23 extends number | mathjs.Complex | mathjs.BigNumber | mathjs.MathCollection>(
        x: T_23,
    ) => T_23;
    log1p: <T_24 extends number | mathjs.Complex | mathjs.BigNumber | mathjs.MathCollection>(
        x: T_24,
        base?: number | mathjs.Complex | mathjs.BigNumber | undefined,
    ) => T_24;
    log2: <T_25 extends number | mathjs.Complex | mathjs.BigNumber | mathjs.MathCollection>(
        x: T_25,
    ) => T_25;
    multiply: {
        <T_26 extends mathjs.Matrix>(x: T_26, y: mathjs.MathType): mathjs.Matrix;
        <T_27 extends mathjs.Matrix>(x: mathjs.MathType, y: T_27): mathjs.Matrix;
        <T_28 extends mathjs.MathNumericType[]>(x: T_28, y: T_28[]): T_28;
        <T_29 extends mathjs.MathNumericType[]>(x: T_29[], y: T_29): T_29;
        <T_30 extends mathjs.MathArray>(x: T_30, y: T_30): T_30;
        (x: mathjs.Unit, y: mathjs.Unit): mathjs.Unit;
        (x: number, y: number): number;
        (x: mathjs.MathType, y: mathjs.MathType): mathjs.MathType;
    };
    norm: (
        x: number | mathjs.Complex | mathjs.BigNumber | mathjs.MathCollection,
        p?: string | number | mathjs.BigNumber | undefined,
    ) => number | mathjs.BigNumber;
    nthRoot: (
        a: number | mathjs.Complex | mathjs.BigNumber | mathjs.MathCollection,
        root?: number | mathjs.BigNumber | undefined,
    ) => number | mathjs.Complex | mathjs.MathCollection;
    pow: (x: mathjs.MathType, y: number | mathjs.Complex | mathjs.BigNumber) => mathjs.MathType;
    sign: <T_31 extends mathjs.MathType>(x: T_31) => T_31;
    sqrt: {
        (x: number): number | mathjs.Complex;
        <T_32 extends mathjs.Complex | mathjs.BigNumber | mathjs.Unit>(x: T_32): T_32;
    };
    square: <T_33 extends mathjs.MathNumericType | mathjs.Unit>(x: T_33) => T_33;
    subtract: {
        <T_34 extends mathjs.MathType>(x: T_34, y: T_34): T_34;
        (x: mathjs.MathType, y: mathjs.MathType): mathjs.MathType;
    };
    unaryMinus: <T_35 extends mathjs.MathType>(x: T_35) => T_35;
    unaryPlus: <T_36 extends string | mathjs.MathType>(x: T_36) => T_36;
    xgcd: (a: number | mathjs.BigNumber, b: number | mathjs.BigNumber) => mathjs.MathArray;
    bitAnd: <T_37 extends number | mathjs.BigNumber | mathjs.MathCollection>(
        x: T_37,
        y: number | mathjs.BigNumber | mathjs.MathCollection,
    ) => mathjs.NoLiteralType<T_37>;
    bitNot: <T_38 extends number | mathjs.BigNumber | mathjs.MathCollection>(x: T_38) => T_38;
    bitOr: <T_39 extends number | mathjs.BigNumber | mathjs.MathCollection>(
        x: T_39,
        y: T_39,
    ) => T_39;
    bitXor: <T_40 extends number | mathjs.BigNumber | mathjs.MathCollection>(
        x: T_40,
        y: number | mathjs.BigNumber | mathjs.MathCollection,
    ) => mathjs.NoLiteralType<T_40>;
    leftShift: <T_41 extends number | mathjs.BigNumber | mathjs.MathCollection>(
        x: T_41,
        y: number | mathjs.BigNumber,
    ) => mathjs.NoLiteralType<T_41>;
    rightArithShift: <T_42 extends number | mathjs.BigNumber | mathjs.MathCollection>(
        x: T_42,
        y: number | mathjs.BigNumber,
    ) => mathjs.NoLiteralType<T_42>;
    rightLogShift: <T_43 extends number | mathjs.MathCollection>(
        x: T_43,
        y: number,
    ) => mathjs.NoLiteralType<T_43>;
    bellNumbers: <T_44 extends number | mathjs.BigNumber>(n: T_44) => T_44;
    catalan: <T_45 extends number | mathjs.BigNumber>(n: T_45) => T_45;
    composition: <T_46 extends number | mathjs.BigNumber>(
        n: T_46,
        k: number | mathjs.BigNumber,
    ) => mathjs.NoLiteralType<T_46>;
    stirlingS2: <T_47 extends number | mathjs.BigNumber>(
        n: T_47,
        k: number | mathjs.BigNumber,
    ) => mathjs.NoLiteralType<T_47>;
    arg: {
        (x: number | mathjs.Complex): number;
        (x: mathjs.Complex | mathjs.BigNumber): mathjs.BigNumber;
        <T_48 extends mathjs.MathCollection>(x: T_48): T_48;
    };
    conj: <T_49 extends number | mathjs.Complex | mathjs.BigNumber | mathjs.MathCollection>(
        x: T_49,
    ) => mathjs.NoLiteralType<T_49>;
    im: {
        (x: mathjs.MathJsChain<number | mathjs.Complex>): mathjs.MathJsChain<number>;
        <T_50 extends mathjs.BigNumber | mathjs.MathCollection>(
            x: mathjs.MathJsChain<T_50>,
        ): mathjs.MathJsChain<T_50>;
    };
    re: {
        (x: mathjs.MathJsChain<number | mathjs.Complex>): mathjs.MathJsChain<number>;
        <T_51 extends mathjs.BigNumber | mathjs.MathCollection>(
            x: mathjs.MathJsChain<T_51>,
        ): mathjs.MathJsChain<T_51>;
    };
    distance: (
        x: object | mathjs.MathCollection,
        y: object | mathjs.MathCollection,
        z?: object | mathjs.MathCollection | undefined,
    ) => number | mathjs.BigNumber;
    intersect: (
        w: mathjs.MathCollection,
        x: mathjs.MathCollection,
        y: mathjs.MathCollection,
        z?: mathjs.MathCollection | undefined,
    ) => mathjs.MathArray;
    and: (
        x: number | mathjs.Complex | mathjs.BigNumber | mathjs.Unit | mathjs.MathCollection,
        y: number | mathjs.Complex | mathjs.BigNumber | mathjs.Unit | mathjs.MathCollection,
    ) => boolean | mathjs.MathCollection;
    not: (
        x: number | mathjs.Complex | mathjs.BigNumber | mathjs.Unit | mathjs.MathCollection,
    ) => boolean | mathjs.MathCollection;
    or: (
        x: number | mathjs.Complex | mathjs.BigNumber | mathjs.Unit | mathjs.MathCollection,
        y: number | mathjs.Complex | mathjs.BigNumber | mathjs.Unit | mathjs.MathCollection,
    ) => boolean | mathjs.MathCollection;
    xor: (
        x: number | mathjs.Complex | mathjs.BigNumber | mathjs.Unit | mathjs.MathCollection,
        y: number | mathjs.Complex | mathjs.BigNumber | mathjs.Unit | mathjs.MathCollection,
    ) => boolean | mathjs.MathCollection;
    apply: <T_52 extends mathjs.MathCollection>(
        array: T_52,
        dim: number,
        callback: (array: mathjs.MathCollection) => number,
    ) => T_52;
    concat: (
        ...args: (number | mathjs.BigNumber | mathjs.MathCollection)[]
    ) => mathjs.MathCollection;
    cross: (x: mathjs.MathCollection, y: mathjs.MathCollection) => mathjs.MathCollection;
    det: (x: mathjs.MathCollection) => number;
    diag: {
        (X: mathjs.MathCollection, format?: string | undefined): mathjs.Matrix;
        (
            X: mathjs.MathCollection,
            k: number | mathjs.BigNumber,
            format?: string | undefined,
        ): mathjs.MathCollection;
    };
    dot: (x: mathjs.MathCollection, y: mathjs.MathCollection) => number;
    eigs: {
        (
            x: mathjs.MathCollection,
            opts?:
                | number
                | mathjs.BigNumber
                | {
                      precision?: number | mathjs.BigNumber | undefined;
                      eigenvectors?: true | undefined;
                  }
                | undefined,
        ): {
            values: mathjs.MathCollection;
            eigenvectors: {
                value: number | mathjs.BigNumber;
                vector: mathjs.MathCollection;
            }[];
        };
        (
            x: mathjs.MathCollection,
            opts: {
                eigenvectors: false;
                precision?: number | mathjs.BigNumber | undefined;
            },
        ): {
            values: mathjs.MathCollection;
        };
    };
    expm: (x: mathjs.Matrix) => mathjs.Matrix;
    sylvester: (
        A: mathjs.MathCollection,
        B: mathjs.MathCollection,
        C: mathjs.MathCollection,
    ) => mathjs.MathCollection;
    schur: (A: mathjs.MathCollection) => mathjs.SchurDecomposition;
    lyap: (A: mathjs.MathCollection, Q: mathjs.MathCollection) => mathjs.MathCollection;
    identity: {
        (size: number | number[] | mathjs.MathCollection, format?: string | undefined):
            | number
            | mathjs.MathCollection;
        (m: number, n: number, format?: string | undefined): number | mathjs.MathCollection;
    };
    filter: (
        x: string[] | mathjs.MathCollection,
        test:
            | RegExp
            | ((value: any, index: any, matrix: string[] | mathjs.MathCollection) => boolean),
    ) => mathjs.MathCollection;
    flatten: <T_53 extends mathjs.MathCollection>(x: T_53) => T_53;
    forEach: <T_54 extends mathjs.MathCollection>(
        x: T_54,
        callback: (value: any, index: any, matrix: T_54) => void,
    ) => void;
    inv: <T_55 extends number | mathjs.Complex | mathjs.MathCollection>(
        x: T_55,
    ) => mathjs.NoLiteralType<T_55>;
    kron: (x: mathjs.MathCollection, y: mathjs.MathCollection) => mathjs.Matrix;
    map: <T_56 extends mathjs.MathCollection>(
        x: T_56,
        callback: (value: any, index: any, matrix: T_56) => string | mathjs.MathType,
    ) => T_56;
    ones: {
        (
            size?: number | number[] | mathjs.BigNumber | mathjs.BigNumber[] | undefined,
            format?: string | undefined,
        ): mathjs.MathCollection;
        (
            m: number | mathjs.BigNumber,
            n: number | mathjs.BigNumber,
            format?: string | undefined,
        ): mathjs.MathCollection;
        (
            m: number | mathjs.BigNumber,
            n: number | mathjs.BigNumber,
            p: number | mathjs.BigNumber,
            format?: string | undefined,
        ): mathjs.MathCollection;
    };
    partitionSelect: (
        x: mathjs.MathCollection,
        k: number,
        compare?: "asc" | "desc" | ((a: any, b: any) => number) | undefined,
    ) => any;
    pinv: <T_57 extends mathjs.MathType>(x: T_57) => T_57;
    range: {
        (str: string, includeEnd?: boolean | undefined): mathjs.Matrix;
        (
            start: number | mathjs.BigNumber,
            end: number | mathjs.BigNumber,
            includeEnd?: boolean | undefined,
        ): mathjs.Matrix;
        (
            start: number | mathjs.BigNumber | mathjs.Unit,
            end: number | mathjs.BigNumber | mathjs.Unit,
            step: number | mathjs.BigNumber | mathjs.Unit,
            includeEnd?: boolean | undefined,
        ): mathjs.Matrix;
    };
    reshape: <T_58 extends mathjs.MathCollection>(x: T_58, sizes: number[]) => T_58;
    resize: <T_59 extends mathjs.MathCollection>(
        x: T_59,
        size: mathjs.MathCollection,
        defaultValue?: string | number | undefined,
    ) => T_59;
    rotationMatrix: <T_60 extends mathjs.MathCollection>(
        theta?: number | mathjs.Complex | mathjs.BigNumber | mathjs.Unit | undefined,
        axis?: T_60 | undefined,
        format?: "sparse" | "dense" | undefined,
    ) => T_60;
    row: <T_61 extends mathjs.MathCollection>(value: T_61, row: number) => T_61;
    column: <T_62 extends mathjs.MathCollection>(value: T_62, column: number) => T_62;
    rotate: <T_63 extends mathjs.MathCollection>(
        w: T_63,
        theta: number | mathjs.Complex | mathjs.BigNumber | mathjs.Unit,
        v?: T_63 | undefined,
    ) => T_63;
    size: (
        x: string | number | boolean | mathjs.Complex | mathjs.Unit | mathjs.MathCollection,
    ) => mathjs.MathCollection;
    sort: <T_64 extends mathjs.MathCollection>(
        x: T_64,
        compare: "asc" | "desc" | ((a: any, b: any) => number) | "natural",
    ) => T_64;
    sqrtm: <T_65 extends mathjs.MathCollection>(A: T_65) => T_65;
    squeeze: <T_66 extends mathjs.MathCollection>(x: T_66) => T_66;
    subset: <T_67 extends string | mathjs.MathCollection>(
        value: T_67,
        index: mathjs.Index,
        replacement?: any,
        defaultValue?: any,
    ) => T_67;
    trace: (x: mathjs.MathCollection) => number;
    transpose: <T_68 extends mathjs.MathCollection>(x: T_68) => T_68;
    zeros: {
        (
            size?: number | number[] | mathjs.BigNumber | mathjs.BigNumber[] | undefined,
            format?: string | undefined,
        ): mathjs.MathCollection;
        (
            m: number | mathjs.BigNumber,
            n: number | mathjs.BigNumber,
            format?: string | undefined,
        ): mathjs.MathCollection;
        (
            m: number | mathjs.BigNumber,
            n: number | mathjs.BigNumber,
            p: number | mathjs.BigNumber,
            format?: string | undefined,
        ): mathjs.MathCollection;
    };
    fft: <T_69 extends mathjs.MathCollection>(arr: T_69) => T_69;
    ifft: <T_70 extends mathjs.MathCollection>(arr: T_70) => T_70;
    factorial: <T_71 extends number | mathjs.BigNumber | mathjs.MathCollection>(
        n: T_71,
    ) => mathjs.NoLiteralType<T_71>;
    gamma: <T_72 extends number | mathjs.Complex | mathjs.BigNumber>(
        n: T_72,
    ) => mathjs.NoLiteralType<T_72>;
    kldivergence: (q: mathjs.MathCollection, p: mathjs.MathCollection) => number;
    lgamma: <T_73 extends number | mathjs.Complex>(n: T_73) => mathjs.NoLiteralType<T_73>;
    multinomial: <T_74 extends number | mathjs.BigNumber>(a: T_74[]) => mathjs.NoLiteralType<T_74>;
    permutations: <T_75 extends number | mathjs.BigNumber>(
        n: T_75,
        k?: number | mathjs.BigNumber | undefined,
    ) => mathjs.NoLiteralType<T_75>;
    pickRandom: {
        <T_76>(array: T_76[]): T_76;
        <T_77>(array: T_77[], number: number): T_77[];
        <T_78>(array: T_78[], number: number, weights: number[]): T_78[];
    };
    random: {
        (min?: number | undefined, max?: number | undefined): number;
        <T_79 extends mathjs.MathCollection>(
            size: T_79,
            min?: number | undefined,
            max?: number | undefined,
        ): T_79;
    };
    randomInt: {
        (min: number, max?: number | undefined): number;
        <T_80 extends mathjs.MathCollection>(
            size: T_80,
            min?: number | undefined,
            max?: number | undefined,
        ): T_80;
    };
    compare: (
        x: string | mathjs.MathType,
        y: string | mathjs.MathType,
    ) => number | mathjs.BigNumber | mathjs.Fraction | mathjs.MathCollection;
    compareNatural: (x: any, y: any) => number;
    compareText: (
        x: string | mathjs.MathCollection,
        y: string | mathjs.MathCollection,
    ) => number | mathjs.MathCollection;
    deepEqual: (x: mathjs.MathType, y: mathjs.MathType) => mathjs.MathType;
    equal: (
        x: string | mathjs.MathType,
        y: string | mathjs.MathType,
    ) => boolean | mathjs.MathCollection;
    equalText: (
        x: string | mathjs.MathCollection,
        y: string | mathjs.MathCollection,
    ) => number | mathjs.MathCollection;
    larger: (
        x: string | mathjs.MathType,
        y: string | mathjs.MathType,
    ) => boolean | mathjs.MathCollection;
    largerEq: (
        x: string | mathjs.MathType,
        y: string | mathjs.MathType,
    ) => boolean | mathjs.MathCollection;
    smaller: (
        x: string | mathjs.MathType,
        y: string | mathjs.MathType,
    ) => boolean | mathjs.MathCollection;
    smallerEq: (
        x: string | mathjs.MathType,
        y: string | mathjs.MathType,
    ) => boolean | mathjs.MathCollection;
    unequal: (
        x: string | mathjs.MathType,
        y: string | mathjs.MathType,
    ) => boolean | mathjs.MathCollection;
    setCartesian: <T_81 extends mathjs.MathCollection>(a1: T_81, a2: mathjs.MathCollection) => T_81;
    setDifference: <T_82 extends mathjs.MathCollection>(
        a1: T_82,
        a2: mathjs.MathCollection,
    ) => T_82;
    setDistinct: <T_83 extends mathjs.MathCollection>(a: T_83) => T_83;
    setIntersect: <T_84 extends mathjs.MathCollection>(a1: T_84, a2: mathjs.MathCollection) => T_84;
    setIsSubset: (a1: mathjs.MathCollection, a2: mathjs.MathCollection) => boolean;
    setMultiplicity: (e: mathjs.MathNumericType, a: mathjs.MathCollection) => number;
    setPowerset: <T_85 extends mathjs.MathCollection>(a: T_85) => T_85;
    setSize: (a: mathjs.MathCollection) => number;
    setSymDifference: <T_86 extends mathjs.MathCollection>(
        a1: T_86,
        a2: mathjs.MathCollection,
    ) => T_86;
    setUnion: <T_87 extends mathjs.MathCollection>(a1: T_87, a2: mathjs.MathCollection) => T_87;
    zpk2tf: <T_88 extends mathjs.MathCollection>(z: T_88, p: T_88, k?: number | undefined) => T_88;
    freqz: <T_89 extends mathjs.MathCollection>(
        b: T_89,
        a: T_89,
        w?: number | T_89 | undefined,
    ) => {
        w: T_89;
        h: T_89;
    };
    erf: <T_90 extends number | mathjs.MathCollection>(x: T_90) => mathjs.NoLiteralType<T_90>;
    zeta: <T_91 extends number | mathjs.Complex | mathjs.BigNumber>(s: T_91) => T_91;
    mad: (array: mathjs.MathCollection) => any;
    max: {
        <T_92 extends mathjs.MathScalarType>(...args: T_92[]): T_92;
        (...args: mathjs.MathScalarType[]): mathjs.MathScalarType;
        <T_93 extends mathjs.MathScalarType>(
            A: T_93[] | T_93[][],
            dimension?: number | mathjs.BigNumber | undefined,
        ): T_93;
        (
            A: mathjs.MathCollection,
            dimension?: number | mathjs.BigNumber | undefined,
        ): mathjs.MathScalarType;
    };
    mean: {
        <T_94 extends mathjs.MathScalarType>(...args: T_94[]): T_94;
        (...args: mathjs.MathScalarType[]): mathjs.MathScalarType;
        <T_95 extends mathjs.MathScalarType>(
            A: T_95[] | T_95[][],
            dimension?: number | mathjs.BigNumber | undefined,
        ): T_95;
        (
            A: mathjs.MathCollection,
            dimension?: number | mathjs.BigNumber | undefined,
        ): mathjs.MathScalarType;
    };
    median: {
        <T_96 extends mathjs.MathScalarType>(...args: T_96[]): T_96;
        (...args: mathjs.MathScalarType[]): mathjs.MathScalarType;
        <T_97 extends mathjs.MathScalarType>(A: T_97[] | T_97[][]): T_97;
        (A: mathjs.MathCollection): mathjs.MathScalarType;
    };
    min: {
        <T_98 extends mathjs.MathScalarType>(...args: T_98[]): T_98;
        (...args: mathjs.MathScalarType[]): mathjs.MathScalarType;
        <T_99 extends mathjs.MathScalarType>(
            A: T_99[] | T_99[][],
            dimension?: number | mathjs.BigNumber | undefined,
        ): T_99;
        (
            A: mathjs.MathCollection,
            dimension?: number | mathjs.BigNumber | undefined,
        ): mathjs.MathScalarType;
    };
    mode: {
        <T_100 extends mathjs.MathScalarType>(...args: T_100[]): T_100[];
        (...args: mathjs.MathScalarType[]): mathjs.MathScalarType[];
        <T_101 extends mathjs.MathScalarType>(A: T_101[] | T_101[][]): T_101[];
        (A: mathjs.MathCollection): mathjs.MathScalarType[];
    };
    prod: {
        <T_102 extends mathjs.MathScalarType>(...args: T_102[]): T_102;
        (...args: mathjs.MathScalarType[]): mathjs.MathScalarType;
        <T_103 extends mathjs.MathScalarType>(A: T_103[] | T_103[][]): T_103;
        (A: mathjs.MathCollection): mathjs.MathScalarType;
    };
    quantileSeq: (
        A: mathjs.MathCollection,
        prob: number | mathjs.BigNumber | mathjs.MathArray,
        sorted?: boolean | undefined,
    ) => number | mathjs.BigNumber | mathjs.Unit | mathjs.MathArray;
    std: {
        <T_104 extends mathjs.MathScalarType>(...args: T_104[]): T_104;
        (...args: mathjs.MathScalarType[]): mathjs.MathScalarType;
        (
            array: mathjs.MathCollection,
            dimension?: number | undefined,
            normalization?: "unbiased" | "uncorrected" | "biased" | undefined,
        ): mathjs.MathNumericType[];
        (
            array: mathjs.MathCollection,
            normalization: "unbiased" | "uncorrected" | "biased",
        ): mathjs.MathNumericType;
    };
    sum: {
        <T_105 extends mathjs.MathScalarType>(...args: T_105[]): T_105;
        (...args: mathjs.MathScalarType[]): mathjs.MathScalarType;
        <T_106 extends mathjs.MathScalarType>(
            A: T_106[] | T_106[][],
            dimension?: number | mathjs.BigNumber | undefined,
        ): T_106;
        (
            A: mathjs.MathCollection,
            dimension?: number | mathjs.BigNumber | undefined,
        ): mathjs.MathScalarType;
    };
    count: (x: string | mathjs.MathCollection) => number;
    cumsum: {
        (...args: mathjs.MathType[]): mathjs.MathType[];
        (array: mathjs.MathCollection, dim?: number | undefined): mathjs.MathCollection;
    };
    variance: {
        (...args: mathjs.MathNumericType[]): mathjs.MathNumericType;
        (
            array: mathjs.MathCollection,
            dimension?: number | undefined,
            normalization?: "unbiased" | "uncorrected" | "biased" | undefined,
        ): mathjs.MathNumericType[];
        (
            array: mathjs.MathCollection,
            normalization: "unbiased" | "uncorrected" | "biased",
        ): mathjs.MathNumericType;
    };
    corr: (x: mathjs.MathCollection, y: mathjs.MathCollection) => mathjs.MathType;
    format: (
        value: any,
        options?:
            | number
            | mathjs.BigNumber
            | mathjs.FormatOptions
            | ((item: any) => string)
            | undefined,
        callback?: ((value: any) => string) | undefined,
    ) => string;
    print: (
        template: string,
        values: any,
        precision?: number | undefined,
        options?: number | object | undefined,
    ) => void;
    acos: {
        (x: number): number | mathjs.Complex;
        <T_107 extends mathjs.Complex | mathjs.BigNumber>(x: T_107): T_107;
    };
    acosh: {
        (x: number): number | mathjs.Complex;
        <T_108 extends mathjs.Complex | mathjs.BigNumber>(x: T_108): T_108;
    };
    acot: {
        (x: number): number;
        <T_109 extends mathjs.Complex | mathjs.BigNumber>(x: T_109): T_109;
    };
    acoth: {
        (x: number): number;
        <T_110 extends mathjs.Complex | mathjs.BigNumber>(x: T_110): T_110;
    };
    acsc: {
        (x: number): number | mathjs.Complex;
        <T_111 extends mathjs.Complex | mathjs.BigNumber>(x: T_111): T_111;
    };
    acsch: {
        (x: number): number;
        <T_112 extends mathjs.Complex | mathjs.BigNumber>(x: T_112): T_112;
    };
    asec: {
        (x: number): number | mathjs.Complex;
        <T_113 extends mathjs.Complex | mathjs.BigNumber>(x: T_113): T_113;
    };
    asech: {
        (x: number): number | mathjs.Complex;
        <T_114 extends mathjs.Complex | mathjs.BigNumber>(x: T_114): T_114;
    };
    asin: {
        (x: number): number | mathjs.Complex;
        <T_115 extends mathjs.Complex | mathjs.BigNumber>(x: T_115): T_115;
    };
    asinh: <T_116 extends number | mathjs.Complex | mathjs.BigNumber>(x: T_116) => T_116;
    atan: <T_117 extends number | mathjs.Complex | mathjs.BigNumber>(x: T_117) => T_117;
    atan2: <T_118 extends number | mathjs.MathCollection>(y: T_118, x: T_118) => T_118;
    atanh: {
        (x: number): number | mathjs.Complex;
        <T_119 extends mathjs.Complex | mathjs.BigNumber>(x: T_119): T_119;
    };
    cos: {
        (x: number | mathjs.Unit): number;
        <T_120 extends mathjs.Complex | mathjs.BigNumber>(x: T_120): T_120;
    };
    cosh: {
        (x: number | mathjs.Unit): number;
        <T_121 extends mathjs.Complex | mathjs.BigNumber>(x: T_121): T_121;
    };
    cot: {
        (x: number | mathjs.Unit): number;
        <T_122 extends mathjs.Complex | mathjs.BigNumber>(x: T_122): T_122;
    };
    coth: {
        (x: number | mathjs.Unit): number;
        <T_123 extends mathjs.Complex | mathjs.BigNumber>(x: T_123): T_123;
    };
    csc: {
        (x: number | mathjs.Unit): number;
        <T_124 extends mathjs.Complex | mathjs.BigNumber>(x: T_124): T_124;
    };
    csch: {
        (x: number | mathjs.Unit): number;
        <T_125 extends mathjs.Complex | mathjs.BigNumber>(x: T_125): T_125;
    };
    sec: {
        (x: number | mathjs.Unit): number;
        <T_126 extends mathjs.Complex | mathjs.BigNumber>(x: T_126): T_126;
    };
    sech: {
        (x: number | mathjs.Unit): number;
        <T_127 extends mathjs.Complex | mathjs.BigNumber>(x: T_127): T_127;
    };
    sin: {
        (x: number | mathjs.Unit): number;
        <T_128 extends mathjs.Complex | mathjs.BigNumber>(x: T_128): T_128;
    };
    sinh: {
        (x: number | mathjs.Unit): number;
        <T_129 extends mathjs.Complex | mathjs.BigNumber>(x: T_129): T_129;
    };
    tan: {
        (x: number | mathjs.Unit): number;
        <T_130 extends mathjs.Complex | mathjs.BigNumber>(x: T_130): T_130;
    };
    tanh: {
        (x: number | mathjs.Unit): number;
        <T_131 extends mathjs.Complex | mathjs.BigNumber>(x: T_131): T_131;
    };
    to: (
        x: mathjs.Unit | mathjs.MathCollection,
        unit: string | mathjs.Unit,
    ) => mathjs.Unit | mathjs.MathCollection;
    isNumber: (x: unknown) => x is number;
    isBigNumber: (x: unknown) => x is mathjs.BigNumber;
    isComplex: (x: unknown) => x is mathjs.Complex;
    isFraction: (x: unknown) => x is mathjs.Fraction;
    isUnit: (x: unknown) => x is mathjs.Unit;
    isString: (x: unknown) => x is string;
    isArray: (arg: any) => arg is any[];
    isMatrix: (x: unknown) => x is mathjs.Matrix;
    isCollection: (x: unknown) => x is any[] | mathjs.Matrix;
    isDenseMatrix: (x: unknown) => x is mathjs.Matrix;
    isSparseMatrix: (x: unknown) => x is mathjs.Matrix;
    isRange: (x: unknown) => boolean;
    isIndex: (x: unknown) => x is mathjs.Index;
    isBoolean: (x: unknown) => x is boolean;
    isResultSet: (x: unknown) => boolean;
    isHelp: (x: unknown) => x is mathjs.Help;
    isFunction: (x: unknown) => boolean;
    isDate: (x: unknown) => x is Date;
    isRegExp: (x: unknown) => x is RegExp;
    isObject: (x: unknown) => boolean;
    isNull: (x: unknown) => x is null;
    isUndefined: (x: unknown) => x is undefined;
    isAccessorNode: (x: unknown) => x is mathjs.AccessorNode<mathjs.MathNode>;
    isArrayNode: (x: unknown) => x is mathjs.ArrayNode<mathjs.MathNode[]>;
    isAssignmentNode: (x: unknown) => x is mathjs.AssignmentNode<mathjs.MathNode>;
    isBlockNode: (x: unknown) => x is mathjs.BlockNode<mathjs.MathNode>;
    isConditionalNode: (
        x: unknown,
    ) => x is mathjs.ConditionalNode<mathjs.MathNode, mathjs.MathNode, mathjs.MathNode>;
    isConstantNode: (x: unknown) => x is mathjs.ConstantNode<number>;
    isFunctionAssignmentNode: (x: unknown) => x is mathjs.FunctionAssignmentNode<mathjs.MathNode>;
    isFunctionNode: (x: unknown) => x is mathjs.FunctionNode<mathjs.SymbolNode, mathjs.MathNode[]>;
    isIndexNode: (x: unknown) => x is mathjs.IndexNode<mathjs.MathNode[]>;
    isNode: (x: unknown) => x is mathjs.MathNode;
    isObjectNode: (x: unknown) => x is mathjs.ObjectNode<Record<string, mathjs.MathNode>>;
    isOperatorNode: (
        x: unknown,
    ) => x is mathjs.OperatorNode<
        mathjs.OperatorNodeOp,
        keyof mathjs.OperatorNodeMap,
        mathjs.MathNode[]
    >;
    isParenthesisNode: (x: unknown) => x is mathjs.ParenthesisNode<mathjs.MathNode>;
    isRangeNode: (
        x: unknown,
    ) => x is mathjs.RangeNode<mathjs.MathNode, mathjs.MathNode, mathjs.MathNode>;
    isRelationalNode: (x: unknown) => x is mathjs.RelationalNode<mathjs.MathNode[]>;
    isSymbolNode: (x: unknown) => x is mathjs.SymbolNode;
    isChain: (x: unknown) => x is mathjs.MathJsChain<unknown>;
    clone: <TType>(x: TType) => TType;
    hasNumericValue: (x: any) => boolean | boolean[];
    isInteger: (x: number | mathjs.BigNumber | mathjs.Fraction | mathjs.MathCollection) => boolean;
    isNaN: (
        x: number | mathjs.BigNumber | mathjs.Fraction | mathjs.Unit | mathjs.MathCollection,
    ) => boolean;
    isNegative: (
        x: number | mathjs.BigNumber | mathjs.Fraction | mathjs.Unit | mathjs.MathCollection,
    ) => boolean;
    isNumeric: (x: any) => x is number | boolean | mathjs.BigNumber | mathjs.Fraction;
    isPositive: (
        x: number | mathjs.BigNumber | mathjs.Fraction | mathjs.Unit | mathjs.MathCollection,
    ) => boolean;
    isPrime: (x: number | mathjs.BigNumber | mathjs.MathCollection) => boolean;
    isZero: (x: mathjs.MathType) => boolean;
    typeOf: (x: any) => string;
};
export default _default;
