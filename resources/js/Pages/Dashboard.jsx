import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Chart from "chart.js/auto";
import { useEffect, useRef } from "react";

export default function Dashboard({ auth, rivers }) {
    console.log(rivers);

    const dataFuzzyEC = {
        labels: ["0", "200", "600", "1000", "1200"],
        datasets: [
            {
                label: "EC Baik",
                data: [1, 1, 0, 0, 0],
                borderColor: "green",
            },
            {
                label: "EC Sedang",
                data: [0, 0, 1, 0, 0],
                borderColor: "orange",
            },
            {
                label: "EC Buruk",
                data: [0, 0, 0, 1, 1],
                borderColor: "red",
            },
        ],
    };

    const dataFuzzyTDS = {
        labels: ["0", "300", "750", "1200", "1500"],
        datasets: [
            {
                label: "TDS Baik",
                data: [1, 1, 0, 0, 0],
                borderColor: "green",
            },
            {
                label: "TDS Sedang",
                data: [0, 0, 1, 0, 0],
                borderColor: "orange",
            },
            {
                label: "TDS Buruk",
                data: [0, 0, 0, 1, 1],
                borderColor: "red",
            },
        ],
    };

    const dataFuzzySalinitas = {
        labels: ["0,25", "0,5", "0,75", "1", "1.25"],
        datasets: [
            {
                label: "Sal. Baik",
                data: [1, 1, 0, 0, 0],
                borderColor: "green",
            },
            {
                label: "Sal. Sedang",
                data: [0, 0, 1, 0, 0],
                borderColor: "orange",
            },
            {
                label: "Sal. Buruk",
                data: [0, 0, 0, 1, 1],
                borderColor: "red",
            },
        ],
    };

    const dataFuzzypH = {
        labels: ["0", "6", "6,5", "7,5", "8,5", "9", "14"],
        datasets: [
            {
                label: "pH Baik",
                data: [0, 0, 0, 1, 0, 0, 0],
                borderColor: "green",
            },
            {
                label: "pH Sedang",
                data: [0, 0, 1, 0, 1, 0, 0],
                borderColor: "orange",
            },
            {
                label: "pH Buruk",
                data: [1, 1, 0, 0, 0, 1, 1],
                borderColor: "red",
            },
        ],
    };

    const dataFuzzyORP = {
        labels: ["-125", "-100", "25", "150", "175"],
        datasets: [
            {
                label: "ORP Baik",
                data: [0, 0, 0, 1, 1],
                borderColor: "green",
            },
            {
                label: "ORP Sedang",
                data: [0, 0, 1, 0, 0],
                borderColor: "orange",
            },
            {
                label: "ORP Buruk",
                data: [1, 1, 0, 0, 0],
                borderColor: "red",
            },
        ],
    };

    const dataFuzzySG = {
        labels: ["1000", "1005", "1010", "1005", "1020"],
        datasets: [
            {
                label: "SG Baik",
                data: [1, 1, 0, 0, 0],
                borderColor: "green",
            },
            {
                label: "SG Sedang",
                data: [0, 0, 1, 0, 0],
                borderColor: "orange",
            },
            {
                label: "SG Buruk",
                data: [0, 0, 0, 1, 1],
                borderColor: "red",
            },
        ],
    };

    const dataFuzzySuhu = {
        labels: ["0", "30", "32", "34", "100"],
        datasets: [
            {
                label: "Suhu Baik",
                data: [1, 1, 0, 0, 0],
                borderColor: "green",
            },
            {
                label: "Suhu Sedang",
                data: [0, 0, 1, 0, 0],
                borderColor: "orange",
            },
            {
                label: "Suhu Buruk",
                data: [0, 0, 0, 1, 1],
                borderColor: "red",
            },
        ],
    };

    const dataFuzzyKualitasAir = {
        labels: ["0", "30", "55", "80", "100"],
        datasets: [
            {
                label: "Kua. Baik",
                data: [1, 1, 0, 0, 0],
                borderColor: "green",
            },
            {
                label: "Kua. Sedang",
                data: [0, 0, 1, 0, 0],
                borderColor: "orange",
            },
            {
                label: "Kua. Buruk",
                data: [0, 0, 0, 1, 1],
                borderColor: "red",
            },
        ],
    };

    const lineConfig = (data) => {
        return {
            type: "line",
            data: data,
        };
    };

    const dataAvg = {
        datasets: [
            {
                label: "EC",
                data: rivers.map((river) => ({
                    x: river.ec,
                    y: river.kualitas,
                })),
                backgroundColor: "#FF0000",
            },
            {
                label: "TDS",
                data: rivers.map((river) => ({
                    x: river.tds,
                    y: river.kualitas,
                })),
                backgroundColor: "#FFA500",
            },
            {
                label: "Salinitas",
                data: rivers.map((river) => ({
                    x: river.salinitas,
                    y: river.kualitas,
                })),
                backgroundColor: "#FFFF00",
            },
            {
                label: "pH",
                data: rivers.map((river) => ({
                    x: river.ph,
                    y: river.kualitas,
                })),
                backgroundColor: "#008000",
            },
            {
                label: "ORP",
                data: rivers.map((river) => ({
                    x: river.orp,
                    y: river.kualitas,
                })),
                backgroundColor: "#0000FF",
            },
            {
                label: "SG",
                data: rivers.map((river) => ({
                    x: river.sg,
                    y: river.kualitas,
                })),
                backgroundColor: "#4B0082",
            },
            {
                label: "Suhu",
                data: rivers.map((river) => ({
                    x: river.suhu,
                    y: river.kualitas,
                })),
                backgroundColor: "#800080",
            },
        ],
    };

    const scatterConfig = (data) => {
        return {
            type: "scatter",
            data: data,
            options: {
                scales: {
                    x: {
                        type: "linear",
                        position: "bottom",
                    },
                },
            },
        };
    };

    const ChartFuzzyEC = () => {
        const refs = useRef();
        useEffect(() => {
            const ctx = refs.current.getContext("2d");
            new Chart(ctx, lineConfig(dataFuzzyEC));
        }, []);
        return <canvas ref={refs} width="400" height="200"></canvas>;
    };

    const ChartFuzzyTDS = () => {
        const refs = useRef();
        useEffect(() => {
            const ctx = refs.current.getContext("2d");
            new Chart(ctx, lineConfig(dataFuzzyTDS));
        }, []);
        return <canvas ref={refs} width="400" height="200"></canvas>;
    };

    const ChartFuzzySalinitas = () => {
        const refs = useRef();
        useEffect(() => {
            const ctx = refs.current.getContext("2d");
            new Chart(ctx, lineConfig(dataFuzzySalinitas));
        }, []);
        return <canvas ref={refs} width="400" height="200"></canvas>;
    };

    const ChartFuzzypH = () => {
        const refs = useRef();
        useEffect(() => {
            const ctx = refs.current.getContext("2d");
            new Chart(ctx, lineConfig(dataFuzzypH));
        }, []);
        return <canvas ref={refs} width="400" height="200"></canvas>;
    };

    const ChartFuzzyORP = () => {
        const refs = useRef();
        useEffect(() => {
            const ctx = refs.current.getContext("2d");
            new Chart(ctx, lineConfig(dataFuzzyORP));
        }, []);
        return <canvas ref={refs} width="400" height="200"></canvas>;
    };

    const ChartFuzzySG = () => {
        const refs = useRef();
        useEffect(() => {
            const ctx = refs.current.getContext("2d");
            new Chart(ctx, lineConfig(dataFuzzySG));
        }, []);
        return <canvas ref={refs} width="400" height="200"></canvas>;
    };

    const ChartFuzzySuhu = () => {
        const refs = useRef();
        useEffect(() => {
            const ctx = refs.current.getContext("2d");
            new Chart(ctx, lineConfig(dataFuzzySuhu));
        }, []);
        return <canvas ref={refs} width="400" height="200"></canvas>;
    };

    const ChartFuzzyKualitasAir = () => {
        const refs = useRef();
        useEffect(() => {
            const ctx = refs.current.getContext("2d");
            new Chart(ctx, lineConfig(dataFuzzyKualitasAir));
        }, []);
        return <canvas ref={refs} width="400" height="200"></canvas>;
    };

    const ChartAvg = () => {
        const refs = useRef();
        useEffect(() => {
            const ctx = refs.current.getContext("2d");
            new Chart(ctx, scatterConfig(dataAvg));
        }, []);
        return <canvas ref={refs} width="400" height="200"></canvas>;
    };

    const nilaiAvg = {
        ec: (
            rivers.map((river) => river.ec).reduce((a, b) => a + b, 0) /
            rivers.length
        ).toFixed(2),
        tds: (
            rivers.map((river) => river.tds).reduce((a, b) => a + b, 0) /
            rivers.length
        ).toFixed(2),
        salinitas: (
            rivers.map((river) => river.salinitas).reduce((a, b) => a + b, 0) /
            rivers.length
        ).toFixed(2),
        ph: (
            rivers.map((river) => river.ph).reduce((a, b) => a + b, 0) /
            rivers.length
        ).toFixed(2),
        orp: (
            rivers.map((river) => river.orp).reduce((a, b) => a + b, 0) /
            rivers.length
        ).toFixed(2),
        sg: (
            rivers.map((river) => river.sg).reduce((a, b) => a + b, 0) /
            rivers.length
        ).toFixed(2),
        suhu: (
            rivers.map((river) => river.suhu).reduce((a, b) => a + b, 0) /
            rivers.length
        ).toFixed(2),
        kualitas: (
            rivers.map((river) => river.kualitas).reduce((a, b) => a + b, 0) /
            rivers.length
        ).toFixed(2),
    };

    console.log(nilaiAvg);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            You're logged in!
                        </div>
                    </div>
                    <div className="flex space-x-6">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg w-1/4 ">
                            <div className="p-6 space-y-3">
                                <div className="text-lg font-bold">
                                    Fungsi Keanggotaan Fuzzy
                                </div>
                                <div className="space-y-3 divide-y divide-gray-400">
                                    <ChartFuzzyEC></ChartFuzzyEC>
                                    <ChartFuzzyTDS></ChartFuzzyTDS>
                                    <ChartFuzzySalinitas></ChartFuzzySalinitas>
                                    <ChartFuzzypH></ChartFuzzypH>
                                    <ChartFuzzyORP></ChartFuzzyORP>
                                    <ChartFuzzySG></ChartFuzzySG>
                                    <ChartFuzzySuhu></ChartFuzzySuhu>
                                    <ChartFuzzyKualitasAir></ChartFuzzyKualitasAir>
                                </div>
                            </div>
                        </div>
                        <div className="w-3/4 space-y-6">
                            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg h-max">
                                <div className="p-6 space-y-3">
                                    <div className="text-lg font-bold">
                                        Aturan Fuzzy
                                    </div>
                                    <div>
                                        <ol className="list-decimal text-justify px-8 space-y-3">
                                            <li>
                                                Jika EC Baik, TDS Baik,
                                                Salinitas Baik, pH Baik, ORP
                                                Baik, SG Baik, Suhu Baik; Maka
                                                Kualitas Air Baik
                                            </li>
                                            <li>
                                                Jika EC Baik, TDS Baik,
                                                Salinitas Baik, pH Baik, ORP
                                                Baik, SG Sedang, Suhu Sedang;
                                                Maka Kualitas Air Sedang
                                            </li>
                                            <li>
                                                Jika EC Sedang, TDS Sedang,
                                                Salinitas Sedang, pH Sedang, ORP
                                                Sedang, SG Baik, Suhu Baik; Maka
                                                Kualitas Air Sedang
                                            </li>
                                            <li>
                                                Jika EC Sedang, TDS Sedang,
                                                Salinitas Sedang, pH Sedang, ORP
                                                Sedang, SG Sedang, Suhu Sedang;
                                                Maka Kualitas Air Sedang
                                            </li>
                                            <li>
                                                Jika EC Sedang, TDS Sedang,
                                                Salinitas Sedang, pH Sedang, ORP
                                                Sedang, SG Buruk, Suhu Buruk;
                                                Maka Kualitas Air Sedang
                                            </li>
                                            <li>
                                                Jika EC Buruk, TDS Buruk,
                                                Salinitas Buruk, pH Buruk, ORP
                                                Buruk, SG Sedang, Suhu Sedang;
                                                Maka Kualitas Air Sedang
                                            </li>
                                            <li>
                                                Jika EC Buruk, TDS Buruk,
                                                Salinitas Buruk, pH Buruk, ORP
                                                Buruk, SG Buruk, Suhu Buruk;
                                                Maka Kualitas Air Buruk
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg h-max">
                                <div className="p-6 space-y-3">
                                    <div className="font-bold text-lg">
                                        Hubungan Antara Variabel Input Dengan
                                        Variabel Output
                                    </div>
                                    <ChartAvg></ChartAvg>
                                </div>
                            </div>
                            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg h-max">
                                <div className="p-6 space-y-3">
                                    <div className="text-lg font-bold">
                                        Tabel Nilai Rata-Rata Dari Tiap Variabel
                                    </div>
                                    <div>
                                        <table className="table-auto w-full divide-y divide-gray-200 rounded-lg overflow-hidden">
                                            <thead className="bg-gray-200">
                                                <tr>
                                                    <th className="px-6 py-3">
                                                        EC
                                                    </th>
                                                    <th className="px-6 py-3">
                                                        TDS
                                                    </th>
                                                    <th className="px-6 py-3">
                                                        Salinitas
                                                    </th>
                                                    <th className="px-6 py-3">
                                                        pH
                                                    </th>
                                                    <th className="px-6 py-3">
                                                        ORP
                                                    </th>
                                                    <th className="px-6 py-3">
                                                        SG
                                                    </th>
                                                    <th className="px-6 py-3">
                                                        Suhu
                                                    </th>
                                                    <th className="px-6 py-3">
                                                        Kualitas
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-gray-50 divide-y divide-gray-200">
                                                <tr>
                                                    <td className="text-center px-6 py-3">
                                                        {nilaiAvg.ec}
                                                    </td>
                                                    <td className="text-center px-6 py-3">
                                                        {nilaiAvg.tds}
                                                    </td>
                                                    <td className="text-center px-6 py-3">
                                                        {nilaiAvg.salinitas}
                                                    </td>
                                                    <td className="text-center px-6 py-3">
                                                        {nilaiAvg.ph}
                                                    </td>
                                                    <td className="text-center px-6 py-3">
                                                        {nilaiAvg.orp}
                                                    </td>
                                                    <td className="text-center px-6 py-3">
                                                        {nilaiAvg.sg}
                                                    </td>
                                                    <td className="text-center px-6 py-3">
                                                        {nilaiAvg.suhu}
                                                    </td>
                                                    <td className="text-center px-6 py-3">
                                                        {nilaiAvg.kualitas}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
