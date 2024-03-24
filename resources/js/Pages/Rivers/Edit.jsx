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

    const [aPredikat1, setAPredikat1] = useState();
    const [aPredikat2, setAPredikat2] = useState();
    const [aPredikat3, setAPredikat3] = useState();
    const [aPredikat4, setAPredikat4] = useState();
    const [aPredikat5, setAPredikat5] = useState();
    const [aPredikat6, setAPredikat6] = useState();
    const [aPredikat7, setAPredikat7] = useState();

    const [z1, setZ1] = useState();
    const [z2A, setZ2A] = useState();
    const [z2B, setZ2B] = useState();
    const [z3, setZ3] = useState();
    const [z4, setZ4] = useState();
    const [z5, setZ5] = useState();
    const [z6, setZ6] = useState();
    const [z7, setZ7] = useState();

    useEffect(() => {
        // Fuzzifikasi

        // EC (Electrical Conductivity)
        if (data.ec <= 200) {
            setDerajatKeanggotaanECBaik(1);
            setDerajatKeanggotaanECSedang(0);
            setDerajatKeanggotaanECBuruk(0);
        } else if (data.ec > 200 && data.ec < 600) {
            setDerajatKeanggotaanECBaik((600 - data.ec) / (600 - 200));
            setDerajatKeanggotaanECSedang((data.ec - 200) / (600 - 200));
            setDerajatKeanggotaanECBuruk(0);
        } else if (data.ec == 600) {
            setDerajatKeanggotaanECBaik(0);
            setDerajatKeanggotaanECSedang(1);
            setDerajatKeanggotaanECBuruk(0);
        } else if (data.ec > 600 && data.ec < 1000) {
            setDerajatKeanggotaanECBaik(0);
            setDerajatKeanggotaanECSedang((1000 - data.ec) / (1000 - 600));
            setDerajatKeanggotaanECBuruk((data.ec - 600) / (1000 - 600));
        } else if (data.ec >= 1000) {
            setDerajatKeanggotaanECBaik(0);
            setDerajatKeanggotaanECSedang(0);
            setDerajatKeanggotaanECBuruk(1);
        }

        // TDS (Total Dissolved Solids)
        if (data.tds <= 300) {
            setDerajatKeanggotaanTDSBaik(1);
            setDerajatKeanggotaanTDSSedang(0);
            setDerajatKeanggotaanTDSBuruk(0);
        } else if (data.tds > 300 && data.tds < 750) {
            setDerajatKeanggotaanTDSBaik((750 - data.tds) / (750 - 300));
            setDerajatKeanggotaanTDSSedang((data.tds - 300) / (750 - 300));
            setDerajatKeanggotaanTDSBuruk(0);
        } else if (data.tds == 750) {
            setDerajatKeanggotaanTDSBaik(0);
            setDerajatKeanggotaanTDSSedang(1);
            setDerajatKeanggotaanTDSBuruk(0);
        } else if (data.tds > 750 && data.tds < 1200) {
            setDerajatKeanggotaanTDSBaik(0);
            setDerajatKeanggotaanTDSSedang((1200 - data.tds) / (1200 - 750));
            setDerajatKeanggotaanTDSBuruk((data.tds - 750) / (1200 - 750));
        } else if (data.tds >= 1200) {
            setDerajatKeanggotaanTDSBaik(0);
            setDerajatKeanggotaanTDSSedang(0);
            setDerajatKeanggotaanTDSBuruk(1);
        }

        // Salinitas
        if (data.salinitas <= 0.5) {
            setDerajatKeanggotaanSalinitasBaik(1);
            setDerajatKeanggotaanSalinitasSedang(0);
            setDerajatKeanggotaanSalinitasBuruk(0);
        } else if (data.salinitas > 0.5 && data.salinitas < 0.75) {
            setDerajatKeanggotaanSalinitasBaik(
                (0.75 - data.salinitas) / (0.75 - 0.5)
            );
            setDerajatKeanggotaanSalinitasSedang(
                (data.salinitas - 0.5) / (0.75 - 0.5)
            );
            setDerajatKeanggotaanSalinitasBuruk(0);
        } else if (data.salinitas == 0.75) {
            setDerajatKeanggotaanSalinitasBaik(0);
            setDerajatKeanggotaanSalinitasSedang(1);
            setDerajatKeanggotaanSalinitasBuruk(0);
        } else if (data.salinitas > 0.75 && data.salinitas < 1) {
            setDerajatKeanggotaanSalinitasBaik(0);
            setDerajatKeanggotaanECSedang((1 - data.salinitas) / (1 - 0.75));
            setDerajatKeanggotaanECBuruk((data.salinitas - 0.75) / (1 - 0.75));
        } else if (data.salinitas >= 1) {
            setDerajatKeanggotaanSalinitasBaik(0);
            setDerajatKeanggotaanSalinitasSedang(0);
            setDerajatKeanggotaanSalinitasBuruk(1);
        }

        // pH
        if (data.ph == 7.5) {
            setDerajatKeanggotaanPHBaik(1);
            setDerajatKeanggotaanPHSedang(0);
            setDerajatKeanggotaanPHBuruk(0);
        } else if (data.ph > 7.5 && data.ph < 8.5) {
            setDerajatKeanggotaanPHBaik((8.5 - data.ph) / (8.5 - 7.5));
            setDerajatKeanggotaanPHSedang((data.ph - 7.5) / (8.5 - 7.5));
            setDerajatKeanggotaanPHBuruk(0);
        } else if (data.ph > 6.5 && data.ph < 7.5) {
            setDerajatKeanggotaanPHBaik((6.5 - data.ph) / (6.5 - 7.5));
            setDerajatKeanggotaanPHSedang((data.ph - 7.5) / (6.5 - 7.5));
            setDerajatKeanggotaanPHBuruk(0);
        } else if (data.ph == 6.5 || data.ph == 8.5) {
            setDerajatKeanggotaanPHBaik(0);
            setDerajatKeanggotaanPHSedang(1);
            setDerajatKeanggotaanPHBuruk(0);
        } else if (data.ph > 8.5 && data.ph < 9) {
            setDerajatKeanggotaanPHBaik(0);
            setDerajatKeanggotaanPHSedang((9 - data.ph) / (9 - 8.5));
            setDerajatKeanggotaanPHBuruk((data.ph - 8.5) / (9 - 8.5));
        } else if (data.ph > 6 && data.ph < 6.5) {
            setDerajatKeanggotaanPHBaik(0);
            setDerajatKeanggotaanPHSedang((6 - data.ph) / (6 - 6.5));
            setDerajatKeanggotaanPHBuruk((data.ph - 6.5) / (6 - 6.5));
        } else if (data.ph <= 6 || data.ph >= 9) {
            setDerajatKeanggotaanPHBaik(0);
            setDerajatKeanggotaanPHSedang(0);
            setDerajatKeanggotaanPHBuruk(1);
        }

        // ORP (Oxidation Reduction Potential)
        if (data.orp >= 150) {
            setDerajatKeanggotaanORPBaik(1);
            setDerajatKeanggotaanORPSedang(0);
            setDerajatKeanggotaanORPBuruk(0);
        } else if (data.orp > 25 && data.orp < 150) {
            setDerajatKeanggotaanORPBaik((25 - data.orp) / (25 - 150));
            setDerajatKeanggotaanORPSedang((data.orp - 150) / (25 - 150));
            setDerajatKeanggotaanORPBuruk(0);
        } else if (data.orp == 25) {
            setDerajatKeanggotaanORPBaik(0);
            setDerajatKeanggotaanORPSedang(1);
            setDerajatKeanggotaanORPBuruk(0);
        } else if (data.orp > -100 && data.orp < 25) {
            setDerajatKeanggotaanORPBaik(0);
            setDerajatKeanggotaanORPSedang((-100 - data.orp) / (-100 - 25));
            setDerajatKeanggotaanORPBuruk((data.orp - 25) / (-100 - 25));
        } else if (data.orp <= -100) {
            setDerajatKeanggotaanORPBaik(0);
            setDerajatKeanggotaanORPSedang(0);
            setDerajatKeanggotaanORPBuruk(1);
        }

        // SG (Specific Gravity)
        if (data.sg <= 1005) {
            setDerajatKeanggotaanSGBaik(1);
            setDerajatKeanggotaanSGSedang(0);
            setDerajatKeanggotaanSGBuruk(0);
        } else if (data.sg > 1005 && data.sg < 1007) {
            setDerajatKeanggotaanSGBaik((1007 - data.sg) / (1007 - 1005));
            setDerajatKeanggotaanSGSedang((data.sg - 1005) / (1007 - 1005));
            setDerajatKeanggotaanSGBuruk(0);
        } else if (data.sg == 1007) {
            setDerajatKeanggotaanSGBaik(0);
            setDerajatKeanggotaanSGSedang(1);
            setDerajatKeanggotaanSGBuruk(0);
        } else if (data.sg > 1007 && data.sg < 1009) {
            setDerajatKeanggotaanSGBaik(0);
            setDerajatKeanggotaanSGSedang((1009 - data.sg) / (1009 - 1007));
            setDerajatKeanggotaanSGBuruk((data.sg - 1007) / (1009 - 1007));
        } else if (data.sg >= 1009) {
            setDerajatKeanggotaanSGBaik(0);
            setDerajatKeanggotaanSGSedang(0);
            setDerajatKeanggotaanSGBuruk(1);
        }

        // Suhu
        if (data.suhu <= 30) {
            setDerajatKeanggotaanSuhuBaik(1);
            setDerajatKeanggotaanSuhuSedang(0);
            setDerajatKeanggotaanSuhuBuruk(0);
        } else if (data.suhu > 30 && data.suhu < 32) {
            setDerajatKeanggotaanSuhuBaik((32 - data.suhu) / (32 - 30));
            setDerajatKeanggotaanSuhuSedang((data.suhu - 30) / (32 - 30));
            setDerajatKeanggotaanSuhuBuruk(0);
        } else if (data.suhu == 32) {
            setDerajatKeanggotaanSuhuBaik(0);
            setDerajatKeanggotaanSuhuSedang(1);
            setDerajatKeanggotaanSuhuBuruk(0);
        } else if (data.suhu > 32 && data.suhu < 34) {
            setDerajatKeanggotaanSuhuBaik(0);
            setDerajatKeanggotaanSuhuSedang((34 - data.suhu) / (34 - 32));
            setDerajatKeanggotaanSuhuBuruk((data.suhu - 32) / (34 - 32));
        } else if (data.suhu >= 34) {
            setDerajatKeanggotaanSuhuBaik(0);
            setDerajatKeanggotaanSuhuSedang(0);
            setDerajatKeanggotaanSuhuBuruk(1);
        }

        // Inferensi

        // Rule 1: Kualitas Air Baik
        setAPredikat1(
            Math.min(
                derajatKeanggotaanECBaik,
                derajatKeanggotaanTDSBaik,
                derajatKeanggotaanSalinitasBaik,
                derajatKeanggotaanPHBaik,
                derajatKeanggotaanORPBaik,
                derajatKeanggotaanSGBaik,
                derajatKeanggotaanSuhuBaik
            )
        );
        if (aPredikat1 == 0) {
            setZ1(55);
        } else {
            setZ1(aPredikat1 * (80 - 55) + 55);
        }

        // Rule 2: Kualitas Air Sedang
        setAPredikat2(
            Math.min(
                derajatKeanggotaanECSedang,
                derajatKeanggotaanTDSSedang,
                derajatKeanggotaanSalinitasSedang,
                derajatKeanggotaanPHSedang,
                derajatKeanggotaanORPSedang,
                derajatKeanggotaanSGSedang,
                derajatKeanggotaanSuhuSedang
            )
        );
        if (aPredikat2 == 0) {
            setZ2A(80);
            setZ2B(30);
        } else {
            setZ2A(80 - aPredikat2 * (80 - 55));
            setZ2B(aPredikat2 * (55 - 30) + 30);
        }

        // Rule 3: Kualitas Air Buruk
        setAPredikat3(
            Math.min(
                derajatKeanggotaanECBuruk,
                derajatKeanggotaanTDSBuruk,
                derajatKeanggotaanSalinitasBuruk,
                derajatKeanggotaanPHBuruk,
                derajatKeanggotaanORPBuruk,
                derajatKeanggotaanSGBuruk,
                derajatKeanggotaanSuhuBuruk
            )
        );
        if (aPredikat3 == 0) {
            setZ3(55);
        } else {
            setZ3(55 - aPredikat3 * (55 - 30));
        }

        // Rule 4: Kimia Baik, Fisik Sedang
        setAPredikat4(
            Math.min(
                derajatKeanggotaanECBaik,
                derajatKeanggotaanTDSBaik,
                derajatKeanggotaanSalinitasBaik,
                derajatKeanggotaanPHBaik,
                derajatKeanggotaanORPBaik,
                derajatKeanggotaanSGSedang,
                derajatKeanggotaanSuhuSedang
            )
        );
        if (aPredikat4 == 0) {
            setZ4(55);
        } else {
            setZ4(aPredikat4 * (80 - 55) + 55);
        }

        // Rule 5: Kimia Sedang, Fisik Baik
        setAPredikat5(
            Math.min(
                derajatKeanggotaanECSedang,
                derajatKeanggotaanTDSSedang,
                derajatKeanggotaanSalinitasSedang,
                derajatKeanggotaanPHSedang,
                derajatKeanggotaanORPSedang,
                derajatKeanggotaanSGBaik,
                derajatKeanggotaanSuhuBaik
            )
        );
        if (aPredikat5 == 0) {
            setZ5(55);
        } else {
            setZ5(aPredikat5 * (80 - 55) + 55);
        }

        // Rule 6: Kimia Buruk, Fisik Sedang
        setAPredikat6(
            Math.min(
                derajatKeanggotaanECBuruk,
                derajatKeanggotaanTDSBuruk,
                derajatKeanggotaanSalinitasBuruk,
                derajatKeanggotaanPHBuruk,
                derajatKeanggotaanORPBuruk,
                derajatKeanggotaanSGSedang,
                derajatKeanggotaanSuhuSedang
            )
        );
        if (aPredikat6 == 0) {
            setZ6(55);
        } else {
            setZ6(55 - aPredikat6 * (55 - 30));
        }

        // Rule 7: Kimia Sedang, Fisik Buruk
        setAPredikat7(
            Math.min(
                derajatKeanggotaanECSedang,
                derajatKeanggotaanTDSSedang,
                derajatKeanggotaanSalinitasSedang,
                derajatKeanggotaanPHSedang,
                derajatKeanggotaanORPSedang,
                derajatKeanggotaanSGBuruk,
                derajatKeanggotaanSuhuBuruk
            )
        );
        if (aPredikat7 == 0) {
            setZ7(55);
        } else {
            setZ7(55 - aPredikat7 * (55 - 30));
        }

        setZAkhir(
            (aPredikat1 * z1 +
                aPredikat2 * z2A +
                aPredikat2 * z2B +
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
                    aPredikat7)
        );

        setData("kualitas", zAkhir);
    }, [
        data.ec,
        data.tds,
        data.salinitas,
        data.ph,
        data.orp,
        data.sg,
        data.suhu,
        derajatKeanggotaanECBaik,
        derajatKeanggotaanECSedang,
        derajatKeanggotaanECBuruk,
        derajatKeanggotaanTDSBaik,
        derajatKeanggotaanTDSSedang,
        derajatKeanggotaanTDSBuruk,
        derajatKeanggotaanSalinitasBaik,
        derajatKeanggotaanSalinitasSedang,
        derajatKeanggotaanSalinitasBuruk,
        derajatKeanggotaanPHBaik,
        derajatKeanggotaanPHSedang,
        derajatKeanggotaanPHBuruk,
        derajatKeanggotaanORPBaik,
        derajatKeanggotaanORPSedang,
        derajatKeanggotaanORPBuruk,
        derajatKeanggotaanSGBaik,
        derajatKeanggotaanSGSedang,
        derajatKeanggotaanSGBuruk,
        derajatKeanggotaanSuhuBaik,
        derajatKeanggotaanSuhuSedang,
        derajatKeanggotaanSuhuBuruk,
        aPredikat1,
        aPredikat2,
        aPredikat3,
        aPredikat4,
        aPredikat5,
        aPredikat6,
        aPredikat7,
        z1,
        z2A,
        z2B,
        z3,
        z4,
        z5,
        z6,
        z7,
        zAkhir,
    ]);

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
                    <div className="mt-5">
                        <div className="font-bold text-red-500">
                            Nilai Kualitas Air: {data.kualitas}
                        </div>
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
