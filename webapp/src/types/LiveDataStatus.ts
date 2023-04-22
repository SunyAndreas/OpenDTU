export interface InverterStatistics {
    name?: string,
    Power?: number;
    Voltage?: number;
    Current?: number;
    "Power DC"?: number;
    YieldDay?: number;
    YieldTotal?: number;
    Frequency?: number;
    Temperature?: number;
    PowerFactor?: number;
    ReactivePower?: number;
    Efficiency?: number;
    Irradiation?: number;
}

export interface Inverter {
    serial: number;
    name: string;
    data_age: number;
    poll_enabled: boolean;
    reachable: boolean;
    producing: boolean;
    limit_relative: number;
    limit_absolute: number;
    events: number;
    AC: InverterStatistics[];
    DC: InverterStatistics[];
    INV: InverterStatistics[];
}

export interface Total {
    Power: number;
    YieldDay: number;
    YieldTotal: number;
}

export interface Hints {
    time_sync: boolean;
    default_password: boolean;
    radio_problem: boolean;
}

export interface LiveData {
    inverters: Inverter[];
    total: Total;
    hints: Hints;
}