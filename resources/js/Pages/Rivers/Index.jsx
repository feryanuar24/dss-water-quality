import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import PrimaryButton from "@/Components/PrimaryButton";
import { Head, Link } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faDeleteLeft } from "@fortawesome/free-solid-svg-icons";

export default function Index({ auth, rivers }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Manajemen Data" />

            <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 space-y-5">
                <div className="font-bold text-3xl">
                    Manajemen Data Sungai (Parameter dan Kualitas Air)
                </div>

                <div>
                    <Link href={route("rivers.create")}>
                        <PrimaryButton>Buat</PrimaryButton>
                    </Link>
                </div>

                <div>
                    <table className="table-auto w-full divide-y divide-gray-200 rounded-lg overflow-hidden">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3">Lokasi</th>
                                <th className="px-6 py-3">Tautan</th>
                                <th className="px-6 py-3">EC</th>
                                <th className="px-6 py-3">TDS</th>
                                <th className="px-6 py-3">Salinitas</th>
                                <th className="px-6 py-3">pH</th>
                                <th className="px-6 py-3">ORP</th>
                                <th className="px-6 py-3">SG</th>
                                <th className="px-6 py-3">Suhu</th>
                                <th className="px-6 py-3">Kualitas</th>
                                <th className="px-6 py-3">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {rivers
                                .sort((a, b) =>
                                    a.lokasi.localeCompare(b.lokasi)
                                )
                                .map((river) => (
                                    <tr key={river.id}>
                                        <td className="px-6 py-3">
                                            {river.lokasi}
                                        </td>
                                        <td className="px-6 py-3 text-blue-500 underline hover:text-gray-500">
                                            <a href={river.tautan}>
                                                {river.tautan}
                                            </a>
                                        </td>
                                        <td className="text-center px-6 py-3">
                                            {river.ec}
                                        </td>
                                        <td className="text-center px-6 py-3">
                                            {river.tds}
                                        </td>
                                        <td className="text-center px-6 py-3">
                                            {river.salinitas}
                                        </td>
                                        <td className="text-center px-6 py-3">
                                            {river.ph}
                                        </td>
                                        <td className="text-center px-6 py-3">
                                            {river.orp}
                                        </td>
                                        <td className="text-center px-6 py-3">
                                            {river.sg}
                                        </td>
                                        <td className="text-center px-6 py-3">
                                            {river.suhu}
                                        </td>
                                        <td className="text-center px-6 py-3">
                                            {river.kualitas}
                                        </td>
                                        {river.user.id == auth.user.id && (
                                            <td className="flex justify-between space-x-5 px-6 py-3">
                                                <Link
                                                    href={route("rivers.edit", {
                                                        river: river.id,
                                                    })}
                                                >
                                                    <FontAwesomeIcon
                                                        icon={faPenToSquare}
                                                        className="hover:text-blue-500 cursor-pointer"
                                                    />
                                                </Link>
                                                <Link
                                                    href={route(
                                                        "rivers.destroy",
                                                        river.id
                                                    )}
                                                    method="delete"
                                                    as="button"
                                                >
                                                    <FontAwesomeIcon
                                                        icon={faDeleteLeft}
                                                        className="hover:text-red-500 cursor-pointer"
                                                    />
                                                </Link>
                                            </td>
                                        )}
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
