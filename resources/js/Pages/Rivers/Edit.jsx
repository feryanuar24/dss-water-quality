import React, { useEffect, useState } from "react";
import { useForm, Head, Link } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Edit({ auth, river }) {
    const { data, setData, patch, clearErrors, reset, errors } = useForm({
        lokasi: river.lokasi,
        tautan: river.tautan,
        ec: river.ec,
        tds: river.tds,
        salinitas: river.salinitas,
        ph: river.ph,
        orp: river.orp,
        sg: river.sg,
        suhu: river.suhu,
        kualitas: "",
    });

    const submit = (e) => {
        e.preventDefault();
        patch(route("rivers.update", river.id));
    };

    const [derajatKeanggotaanECBaik, setDerajatKeanggotaanECBaik] = useState();
    const [derajatKeanggotaanECSedang, setDerajatKeanggotaanECSedang] =
        useState();
    const [derajatKeanggotaanECBuruk, setDerajatKeanggotaanECBuruk] =
        useState();

    const [derajatKeanggotaanTDSBaik, setDerajatKeanggotaanTDSBaik] =
        useState();
    const [derajatKeanggotaanTDSSedang, setDerajatKeanggotaanTDSSedang] =
        useState();
    const [derajatKeanggotaanTDSBuruk, setDerajatKeanggotaanTDSBuruk] =
        useState();

    const [
        derajatKeanggotaanSalinitasBaik,
        setDerajatKeanggotaanSalinitasBaik,
    ] = useState();
    const [
        derajatKeanggotaanSalinitasSedang,
        setDerajatKeanggotaanSalinitasSedang,
    ] = useState();
    const [
        derajatKeanggotaanSalinitasBuruk,
        setDerajatKeanggotaanSalinitasBuruk,
    ] = useState();

    const [derajatKeanggotaanPHBaik, setDerajatKeanggotaanPHBaik] = useState();
    const [derajatKeanggotaanPHSedang, setDerajatKeanggotaanPHSedang] =
        useState();
    const [derajatKeanggotaanPHBuruk, setDerajatKeanggotaanPHBuruk] =
        useState();

    const [derajatKeanggotaanORPBaik, setDerajatKeanggotaanORPBaik] =
        useState();
    const [derajatKeanggotaanORPSedang, setDerajatKeanggotaanORPSedang] =
        useState();
    const [derajatKeanggotaanORPBuruk, setDerajatKeanggotaanORPBuruk] =
        useState();

    const [derajatKeanggotaanSGBaik, setDerajatKeanggotaanSGBaik] = useState();
    const [derajatKeanggotaanSGSedang, setDerajatKeanggotaanSGSedang] =
        useState();
    const [derajatKeanggotaanSGBuruk, setDerajatKeanggotaanSGBuruk] =
        useState();

    const [derajatKeanggotaanSuhuBaik, setDerajatKeanggotaanSuhuBaik] =
        useState();
    const [derajatKeanggotaanSuhuSedang, setDerajatKeanggotaanSuhuSedang] =
        useState();
    const [derajatKeanggotaanSuhuBuruk, setDerajatKeanggotaanSuhuBuruk] =
        useState();

    const [z1, setZ1] = useState();
    const [z2a, setZ2a] = useState();
    const [z2b, setZ2b] = useState();
    const [z3, setZ3] = useState();
    const [z4, setZ4] = useState();
    const [z5, setZ5] = useState();
    const [z6, setZ6] = useState();
    const [z7, setZ7] = useState();

    useEffect(() => {
        // Fuzzifikasi

        // EC (Electrical Conductivity)
        if (data.ec <= 90) {
            setDerajatKeanggotaanECBaik(1);
            setDerajatKeanggotaanECSedang(0);
            setDerajatKeanggotaanECBuruk(0);
        } else if (data.ec > 90 && data.ec < 110) {
            setDerajatKeanggotaanECBaik((110 - data.ec) / (110 - 90));
            setDerajatKeanggotaanECSedang((data.ec - 90) / (110 - 90));
            setDerajatKeanggotaanECBuruk(0);
        } else if (data.ec >= 110 && data.ec <= 240) {
            setDerajatKeanggotaanECBaik(0);
            setDerajatKeanggotaanECSedang(1);
            setDerajatKeanggotaanECBuruk(0);
        } else if (data.ec > 240 && data.ec < 260) {
            setDerajatKeanggotaanECBaik(0);
            setDerajatKeanggotaanECSedang(260 - data.ec) / (260 - 240);
            setDerajatKeanggotaanECBuruk(data.ec - 240) / (260 - 240);
        } else if (data.ec >= 260) {
            setDerajatKeanggotaanECBaik(0);
            setDerajatKeanggotaanECSedang(0);
            setDerajatKeanggotaanECBuruk(1);
        }

        // TDS (Total Dissolved Solids)
        if (data.tds <= 400) {
            setDerajatKeanggotaanTDSBaik(1);
            setDerajatKeanggotaanTDSSedang(0);
            setDerajatKeanggotaanTDSBuruk(0);
        } else if (data.tds > 400 && data.tds < 600) {
            setDerajatKeanggotaanTDSBaik((600 - data.tds) / (600 - 400));
            setDerajatKeanggotaanTDSSedang((data.tds - 400) / (600 - 400));
            setDerajatKeanggotaanTDSBuruk(0);
        } else if (data.tds >= 600 && data.tds <= 900) {
            setDerajatKeanggotaanTDSBaik(0);
            setDerajatKeanggotaanTDSSedang(1);
            setDerajatKeanggotaanTDSBuruk(0);
        } else if (data.tds > 900 && data.tds < 1100) {
            setDerajatKeanggotaanTDSBaik(0);
            setDerajatKeanggotaanTDSSedang((1100 - data.tds) / (1100 - 900));
            setDerajatKeanggotaanTDSBuruk((data.tds - 900) / (1100 - 900));
        } else if (data.tds >= 1100) {
            setDerajatKeanggotaanTDSBaik(0);
            setDerajatKeanggotaanTDSSedang(0);
            setDerajatKeanggotaanTDSBuruk(1);
        }

        // Salinitas
        if (data.salinitas <= 0.4) {
            setDerajatKeanggotaanSalinitasBaik(1);
            setDerajatKeanggotaanSalinitasSedang(0);
            setDerajatKeanggotaanSalinitasBuruk(0);
        } else if (data.salinitas > 0.4 && data.salinitas < 0.6) {
            setDerajatKeanggotaanSalinitasBaik(
                (0.6 - data.salinitas) / (0.6 - 0.4)
            );
            setDerajatKeanggotaanSalinitasSedang(
                (data.salinitas - 0.4) / (0.6 - 0.4)
            );
            setDerajatKeanggotaanSalinitasBuruk(0);
        } else if (data.salinitas >= 0.6 && data.salinitas <= 0.9) {
            setDerajatKeanggotaanSalinitasBaik(0);
            setDerajatKeanggotaanSalinitasSedang(1);
            setDerajatKeanggotaanSalinitasBuruk(0);
        } else if (data.salinitas > 0.9 && data.salinitas < 1.1) {
            setDerajatKeanggotaanSalinitasBaik(0);
            setDerajatKeanggotaanECSedang((1.1 - data.salinitas) / (1.1 - 0.9));
            setDerajatKeanggotaanECBuruk((data.salinitas - 0.9) / (1.1 - 0.9));
        } else if (data.salinitas >= 1.1) {
            setDerajatKeanggotaanSalinitasBaik(0);
            setDerajatKeanggotaanSalinitasSedang(0);
            setDerajatKeanggotaanSalinitasBuruk(1);
        }

        // pH
        if (data.ph >= 6.6 && data.ph <= 8.4) {
            setDerajatKeanggotaanPHBaik(1);
            setDerajatKeanggotaanPHSedang(0);
            setDerajatKeanggotaanPHBuruk(0);
        } else if (data.ph > 6.4 && data.ph < 6.6) {
            setDerajatKeanggotaanPHBaik((6.6 - data.ph) / (6.6 - 6.4));
            setDerajatKeanggotaanPHSedang((data.ph - 6.4) / (6.6 - 6.4));
            setDerajatKeanggotaanPHBuruk(0);
        } else if (data.ph > 8.4 && data.ph < 8.6) {
            setDerajatKeanggotaanPHBaik((8.6 - data.ph) / (8.6 - 8.4));
            setDerajatKeanggotaanPHSedang((data.ph - 8.4) / (8.6 - 8.4));
            setDerajatKeanggotaanPHBuruk(0);
        } else if (
            (data.ph >= 6.1 && data.ph >= 6.4) ||
            (data.ph >= 8.6 && data.ph >= 8.9)
        ) {
            setDerajatKeanggotaanPHBaik(0);
            setDerajatKeanggotaanPHSedang(1);
            setDerajatKeanggotaanPHBuruk(0);
        } else if (data.ph > 5.9 && data.ph < 6.1) {
            setDerajatKeanggotaanPHBaik(0);
            setDerajatKeanggotaanPHSedang((6.1 - data.ph) / (6.1 - 5.9));
            setDerajatKeanggotaanPHBuruk((data.ph - 5.9) / (6.1 - 5.9));
        } else if (data.ph > 8.9 && data.ph < 9.1) {
            setDerajatKeanggotaanPHBaik(0);
            setDerajatKeanggotaanPHSedang((9.1 - data.ph) / (9.1 - 8.9));
            setDerajatKeanggotaanPHBuruk((data.ph - 9.1) / (9.1 - 8.9));
        } else if (data.ph <= 5.9 && data.ph >= 9.1) {
            setDerajatKeanggotaanPHBaik(0);
            setDerajatKeanggotaanPHSedang(0);
            setDerajatKeanggotaanPHBuruk(1);
        }

        // ORP (Oxidation Reduction Potential)
        if (data.orp >= 210) {
            setDerajatKeanggotaanORPBaik(1);
            setDerajatKeanggotaanORPSedang(0);
            setDerajatKeanggotaanORPBuruk(0);
        } else if (data.orp > 190 && data.orp < 210) {
            setDerajatKeanggotaanORPBaik((210 - data.orp) / (210 - 190));
            setDerajatKeanggotaanORPSedang((data.orp - 190) / (210 - 190));
            setDerajatKeanggotaanORPBuruk(0);
        } else if (data.orp >= 110 && data.orp <= 190) {
            setDerajatKeanggotaanORPBaik(0);
            setDerajatKeanggotaanORPSedang(1);
            setDerajatKeanggotaanORPBuruk(0);
        } else if (data.orp > 90 && data.orp < 110) {
            setDerajatKeanggotaanORPBaik(0);
            setDerajatKeanggotaanORPSedang((110 - data.orp) / (110 - 90));
            setDerajatKeanggotaanORPBuruk((data.orp - 90) / (110 - 90));
        } else if (data.orp <= 90) {
            setDerajatKeanggotaanORPBaik(0);
            setDerajatKeanggotaanORPSedang(0);
            setDerajatKeanggotaanORPBuruk(1);
        }

        // SG (Specific Gravity)
        if (data.sg >= 1000 && data.sg <= 1004) {
            setDerajatKeanggotaanSGBaik(1);
            setDerajatKeanggotaanSGSedang(0);
            setDerajatKeanggotaanSGBuruk(0);
        } else if (data.sg > 1004 && data.sg < 1006) {
            setDerajatKeanggotaanSGBaik((1006 - data.sg) / (1006 - 1004));
            setDerajatKeanggotaanSGSedang((data.sg - 1004) / (1006 - 1004));
            setDerajatKeanggotaanSGBuruk(0);
        } else if (data.sg >= 1006 && data.sg <= 1014) {
            setDerajatKeanggotaanSGBaik(0);
            setDerajatKeanggotaanSGSedang(1);
            setDerajatKeanggotaanSGBuruk(0);
        } else if (data.sg > 1014 && data.sg < 1016) {
            setDerajatKeanggotaanSGBaik(0);
            setDerajatKeanggotaanSGSedang((1016 - data.sg) / (1016 - 1014));
            setDerajatKeanggotaanSGBuruk((data.sg - 1014) / (1016 - 1014));
        } else if (data.sg >= 1016) {
            setDerajatKeanggotaanSGBaik(0);
            setDerajatKeanggotaanSGSedang(0);
            setDerajatKeanggotaanSGBuruk(1);
        }

        // Suhu
        if (data.suhu >= 25 && data.suhu <= 29) {
            setDerajatKeanggotaanSuhuBaik(1);
            setDerajatKeanggotaanSuhuSedang(0);
            setDerajatKeanggotaanSuhuBuruk(0);
        } else if (data.suhu > 29 && data.suhu < 31) {
            setDerajatKeanggotaanSuhuBaik((31 - data.suhu) / (31 - 29));
            setDerajatKeanggotaanSuhuSedang((data.suhu - 29) / (31 - 29));
            setDerajatKeanggotaanSuhuBuruk(0);
        } else if (data.suhu >= 31 && data.suhu <= 34) {
            setDerajatKeanggotaanSuhuBaik(0);
            setDerajatKeanggotaanSuhuSedang(1);
            setDerajatKeanggotaanSuhuBuruk(0);
        } else if (data.suhu > 34 && data.suhu < 36) {
            setDerajatKeanggotaanSuhuBaik(0);
            setDerajatKeanggotaanSuhuSedang((36 - data.suhu) / (36 - 34));
            setDerajatKeanggotaanSuhuBuruk((data.suhu - 34) / (36 - 34));
        } else if (data.suhu >= 36) {
            setDerajatKeanggotaanSuhuBaik(0);
            setDerajatKeanggotaanSuhuSedang(0);
            setDerajatKeanggotaanSuhuBuruk(1);
        }

        // Inferensi

        // Rule 1: Kualitas Air Baik
        const aPredikat1 = Math.min(
            derajatKeanggotaanECBaik,
            derajatKeanggotaanTDSBaik,
            derajatKeanggotaanSalinitasBaik,
            derajatKeanggotaanPHBaik,
            derajatKeanggotaanORPBaik,
            derajatKeanggotaanSGBaik,
            derajatKeanggotaanSuhuBaik
        );
        if (aPredikat1 == 0) {
            setZ1(50);
        } else {
            setZ1(aPredikat1 * (100 - 50) + 50);
        }

        // Rule 2: Kualitas Air Sedang
        const aPredikat2 = Math.min(
            derajatKeanggotaanECSedang,
            derajatKeanggotaanTDSSedang,
            derajatKeanggotaanSalinitasSedang,
            derajatKeanggotaanPHSedang,
            derajatKeanggotaanORPSedang,
            derajatKeanggotaanSGSedang,
            derajatKeanggotaanSuhuSedang
        );
        if (aPredikat2 == 0) {
            setZ2a(80);
            setZ2b(30);
        } else {
            setZ2a(80 - aPredikat2 * (80 - 50));
            setZ2b(aPredikat2 * (50 - 30) + 30);
        }

        // Rule 3: Kualitas Air Buruk
        const aPredikat3 = Math.min(
            derajatKeanggotaanECBuruk,
            derajatKeanggotaanTDSBuruk,
            derajatKeanggotaanSalinitasBuruk,
            derajatKeanggotaanPHBuruk,
            derajatKeanggotaanORPBuruk,
            derajatKeanggotaanSGBuruk,
            derajatKeanggotaanSuhuBuruk
        );
        if (aPredikat3 == 0) {
            setZ3(50);
        } else {
            setZ3(50 - aPredikat3 * (50 - 0));
        }

        // Rule 4: Kimia Baik, Fisik Sedang
        const aPredikat4 = Math.min(
            derajatKeanggotaanECBaik,
            derajatKeanggotaanTDSBaik,
            derajatKeanggotaanSalinitasBaik,
            derajatKeanggotaanPHBaik,
            derajatKeanggotaanORPBaik,
            derajatKeanggotaanSGSedang,
            derajatKeanggotaanSuhuSedang
        );
        if (aPredikat4 == 0) {
            setZ4(80);
        } else {
            setZ4(80 - aPredikat4 * (80 - 50));
        }

        // Rule 5: Kimia Sedang, Fisik Baik
        const aPredikat5 = Math.min(
            derajatKeanggotaanECSedang,
            derajatKeanggotaanTDSSedang,
            derajatKeanggotaanSalinitasSedang,
            derajatKeanggotaanPHSedang,
            derajatKeanggotaanORPSedang,
            derajatKeanggotaanSGBaik,
            derajatKeanggotaanSuhuBaik
        );
        if (aPredikat5 == 0) {
            setZ5(80);
        } else {
            setZ4(80 - aPredikat5 * (80 - 50));
        }

        // Rule 6: Kimia Buruk, Fisik Sedang
        const aPredikat6 = Math.min(
            derajatKeanggotaanECBuruk,
            derajatKeanggotaanTDSBuruk,
            derajatKeanggotaanSalinitasBuruk,
            derajatKeanggotaanPHBuruk,
            derajatKeanggotaanORPBuruk,
            derajatKeanggotaanSGSedang,
            derajatKeanggotaanSuhuSedang
        );
        if (aPredikat6 == 0) {
            setZ6(30);
        } else {
            setZ6(aPredikat6 * (50 - 30) + 30);
        }

        // Rule 7: Kimia Sedang, Fisik Buruk
        const aPredikat7 = Math.min(
            derajatKeanggotaanECSedang,
            derajatKeanggotaanTDSSedang,
            derajatKeanggotaanSalinitasSedang,
            derajatKeanggotaanPHSedang,
            derajatKeanggotaanORPSedang,
            derajatKeanggotaanSGBuruk,
            derajatKeanggotaanSuhuBuruk
        );
        if (aPredikat7 == 0) {
            setZ7(30);
        } else {
            setZ7(aPredikat7 * (50 - 30) + 30);
        }

        const zAkhir =
            (aPredikat1 * z1 +
                aPredikat2 * z2a +
                aPredikat2 * z2b +
                aPredikat3 * z3 +
                aPredikat4 * z4 +
                aPredikat5 * z5 +
                aPredikat6 * z6 +
                aPredikat7 * z7) /
            (aPredikat1 +
                aPredikat2 +
                aPredikat2 +
                aPredikat3 +
                aPredikat4 +
                aPredikat5 +
                aPredikat6 +
                aPredikat7);

        setData("kualitas", zAkhir);
    }, [
        data.lokasi,
        data.tautan,
        data.ec,
        data.tds,
        data.salinitas,
        data.ph,
        data.orp,
        data.sg,
        data.suhu,
        data.kualitas,
    ]);
    console.log(river);
    console.log(data);
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title={"Edit Parameter Air" + river.lokasi} />
            <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 space-y-5">
                <div className="text-3xl font-bold">
                    Edit Parameter Air ({river.lokasi})
                </div>
                <form onSubmit={submit}>
                    <div>
                        <label>
                            <div className="font-bold">Lokasi</div>
                        </label>
                        <input
                            value={data.lokasi}
                            placeholder="Contoh: Jl. Raya Peruri, Parungmulya, Kec. Ciampel, Karawang, Jawa Barat 41363"
                            className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm mt-1"
                            onChange={(e) => setData("lokasi", e.target.value)}
                        />
                        <InputError lokasi={errors.lokasi} className="mt-2" />
                    </div>

                    <div className="mt-5">
                        <label>
                            <div className="font-bold">Tautan</div>
                        </label>
                        <input
                            value={data.tautan}
                            placeholder="Contoh: https://maps.app.goo.gl/GcU5M4RdgtwUG5rB6"
                            className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm mt-1"
                            onChange={(e) => setData("tautan", e.target.value)}
                        />
                        <InputError tautan={errors.tautan} className="mt-2" />
                    </div>

                    <div className="mt-5">
                        <label>
                            <div className="font-bold">
                                Electrical conductivity (EC)
                            </div>
                        </label>
                        <input
                            value={data.ec}
                            placeholder="Isikan nilai EC dalam μS/cm"
                            className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm mt-1"
                            onChange={(e) => setData("ec", e.target.value)}
                        />
                        <InputError ec={errors.ec} className="mt-2" />
                    </div>

                    <div className="mt-5">
                        <label>
                            <div className="font-bold">
                                Total Dissolved Solids (TDS)
                            </div>
                        </label>
                        <input
                            value={data.tds}
                            placeholder="Isikan nilai EC dalam ppm"
                            className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm mt-1"
                            onChange={(e) => setData("tds", e.target.value)}
                        />
                        <InputError tds={errors.tds} className="mt-2" />
                    </div>

                    <div className="mt-5">
                        <label>
                            <div className="font-bold">Salinitas</div>
                        </label>
                        <input
                            value={data.salinitas}
                            placeholder="Isikan  nilai Salinitas dalam ppt"
                            className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm mt-1"
                            onChange={(e) =>
                                setData("salinitas", e.target.value)
                            }
                        />
                        <InputError
                            salinitas={errors.salinitas}
                            className="mt-2"
                        />
                    </div>

                    <div className="mt-5">
                        <label>
                            <div className="font-bold">pH</div>
                        </label>
                        <input
                            value={data.ph}
                            placeholder="Isikan nilai pH dalam skala 0-14"
                            className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm mt-1"
                            onChange={(e) => setData("ph", e.target.value)}
                        />
                        <InputError ph={errors.ph} className="mt-2" />
                    </div>

                    <div className="mt-5">
                        <label>
                            <div className="font-bold">
                                Oxidation Reduction Potential (ORP)
                            </div>
                        </label>
                        <input
                            value={data.orp}
                            placeholder="Isikan nilai ORP dalam mV"
                            className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm mt-1"
                            onChange={(e) => setData("orp", e.target.value)}
                        />
                        <InputError orp={errors.orp} className="mt-2" />
                    </div>

                    <div className="mt-5">
                        <label>
                            <div className="font-bold">
                                Specific Gravity (SG)
                            </div>
                        </label>
                        <input
                            value={data.sg}
                            placeholder="Isikan nilai SG dalam g/cm³"
                            className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm mt-1"
                            onChange={(e) => setData("sg", e.target.value)}
                        />
                        <InputError sg={errors.sg} className="mt-2" />
                    </div>

                    <div className="mt-5">
                        <label>
                            <div className="font-bold">Suhu</div>
                        </label>
                        <input
                            value={data.suhu}
                            placeholder="Isikan nilai Suhu dalam skala Celcius"
                            className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm mt-1"
                            onChange={(e) => setData("suhu", e.target.value)}
                        />
                        <InputError suhu={errors.suhu} className="mt-2" />
                    </div>
                    <div className="flex space-x-8 items-center">
                        <PrimaryButton className="mt-5">Simpan</PrimaryButton>
                        <Link href={route("rivers.index")}>
                            <div className="text-red-800 px-5 py-1 font-bold rounded-md hover:bg-red-800 hover:text-white mt-5">
                                Batal
                            </div>
                        </Link>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
