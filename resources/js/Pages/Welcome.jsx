import { Link, Head } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMagnifyingGlassChart,
    faPenNib,
    faCode,
    faVial,
    faMessage,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const [view, setView] = useState("teoritis");
    const [scrolled, setScrolled] = useState(false);
    const [nav, setNav] = useState("home");

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <Head title="SPKSungai" />

            <div className="scroll-smooth">
                {/* Header */}
                <div
                    className={`flex w-full justify-between items-center bg-blue-200 px-44 py-5 fixed z-50 ${
                        scrolled ? "bg-opacity-80 shadow-lg" : null
                    }`}
                >
                    <div className="font-black text-3xl text-gray-800 relative">
                        <span className="bg-sky-500 top-2 -z-10 h-[6px] w-[100px] inline-block absolute rounded-[50%] my-0 mx-auto rotate-[160deg]"></span>
                        SPKSungai
                    </div>
                    <div className="flex space-x-5 font-medium text-lg text-gray-800">
                        <div
                            className={`${
                                nav == "home" ? "text-cyan-500" : null
                            }`}
                            onClick={() => setNav("home")}
                        >
                            <a href="#home">Home</a>
                        </div>
                        <div
                            className={`${
                                nav == "fitur" ? "text-cyan-500" : null
                            }`}
                            onClick={() => setNav("fitur")}
                        >
                            <a href="#fitur">Fitur</a>
                        </div>
                        <div
                            className={`${
                                nav == "tutorial" ? "text-cyan-500" : null
                            }`}
                            onClick={() => setNav("tutorial")}
                        >
                            <a href="#tutorial">Tutorial</a>
                        </div>
                        <div
                            className={`${
                                nav == "manfaat" ? "text-cyan-500" : null
                            }`}
                            onClick={() => setNav("manfaat")}
                        >
                            <a href="#manfaat">Manfaat</a>
                        </div>
                        <div
                            className={`${
                                nav == "kontak" ? "text-cyan-500" : null
                            }`}
                            onClick={() => setNav("kontak")}
                        >
                            <a href="#kontak">Kontak</a>
                        </div>
                    </div>
                </div>

                {/* Hero Section */}
                <div
                    className="w-full bg-blue-200 flex flex-col space-y-10 justify-center items-center h-screen"
                    id="home"
                >
                    <div className="bg-sky-500 text-white rounded-lg py-2 px-4 font-medium text-lg">
                        Get Started
                    </div>
                    <div className="font-black text-5xl w-1/2 text-center text-gray-800">
                        SPK Kualitas Air Sungai Fuzzy Tsukamoto
                    </div>
                    <div className="font-medium text-gray-500 text-lg w-1/3 text-center">
                        Sistem Pendukung Keputusan (SPK) ini membantu Anda
                        menentukan kualitas air sungai dengan mudah dan akurat
                        menggunakan metode Fuzzy Tsukamoto.
                    </div>
                    {auth.user ? (
                        <Link
                            href="/dashboard"
                            className="bg-sky-500 text-white rounded-3xl py-3 px-6 font-black text-lg"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <div className="space-x-5">
                            <Link
                                href="/register"
                                className="bg-sky-500 text-white rounded-3xl py-3 px-6 font-black text-lg"
                            >
                                Register
                            </Link>
                            <Link
                                href="/login"
                                className="bg-sky-500 text-white rounded-3xl py-3 px-6 font-black text-lg"
                            >
                                Login
                            </Link>
                        </div>
                    )}
                </div>

                {/* Image Section */}
                <div className="w-full pb-20">
                    <div>
                        <div className="w-full relative bg-blue-200 h-80">
                            <img
                                src="/assets/image/hero-decision.png"
                                alt="Pensive Businessman Making Decison"
                                className="absolute w-11/12 left-12"
                            />
                        </div>
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 1440 320"
                            >
                                <path
                                    fill="#bfdbfe"
                                    fillOpacity="1"
                                    d="M0,96L60,122.7C120,149,240,203,360,213.3C480,224,600,192,720,197.3C840,203,960,245,1080,224C1200,203,1320,117,1380,74.7L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
                                ></path>
                            </svg>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mx-44 border-b-2 pb-20">
                        <div className="w-32">
                            <img
                                src="/assets/image/laravel.png"
                                alt="Laravel Logo"
                            />
                        </div>
                        <div className="w-32">
                            <img
                                src="/assets/image/inertia.png"
                                alt="Inertia Logo"
                            />
                        </div>
                        <div className="w-32">
                            <img
                                src="/assets/image/react.png"
                                alt="Raact Logo"
                            />
                        </div>
                        <div className="w-32">
                            <img
                                src="/assets/image/mysql.png"
                                alt="MySQL Logo"
                            />
                        </div>
                    </div>
                </div>

                {/* Feature Section */}
                <div className="w-full space-y-20 px-44" id="fitur">
                    <div className="space-y-5 text-center">
                        <div className="font-black text-5xl text-gray-800 px-20 relative">
                            <span className="bg-sky-500 top-6 -z-10 h-[6px] w-[100px] inline-block absolute rounded-[50%] my-0 mx-auto rotate-[160deg]"></span>
                            Jelajahi Berbagai Fitur Menakjubkan Kami
                        </div>
                        <div className="font-medium text-lg text-gray-500 px-40">
                            Mendukung input data, analisis data Fuzzy Tsukamoto,
                            dan menghasilkan informasi kualitas air.
                        </div>
                    </div>
                    <div className="flex space-x-5 items-center">
                        <div className="space-y-5">
                            <div className="font-normal text-base text-gray-500 tracking-widest uppercase relative">
                                <span className="bg-sky-500 h-full w-[60px] inline-block absolute opacity-[0.3]"></span>
                                Dashboard
                            </div>
                            <div className="text-5xl font-black text-gray-800">
                                Visualisasi Data Air Sungai dengan Fuzzy
                                Tsukamoto
                            </div>
                            <div className="text-lg font-medium text-gray-500">
                                Fitur-fitur penting seperti grafik fungsi
                                keagotaan fuzzy, aturan fuzzy, dan visualisasi
                                data memungkinkan Anda untuk memahami dan
                                menganalisis data secara mendalam.
                            </div>
                        </div>
                        <div className="w-[1200px]">
                            <img
                                src="/assets/image/dashboard.png"
                                alt="Tampilan Halaman Dahboard"
                            />
                        </div>
                    </div>
                    <div className="flex space-x-5 items-center">
                        <div className="w-[1200px]">
                            <img
                                src="/assets/image/manajemen-data.png"
                                alt="Tampilan Halaman Manajemen Data"
                            />
                        </div>
                        <div className="space-y-5">
                            <div className="font-normal text-gray-500 tracking-widest uppercase relative">
                                <span className="bg-sky-500 h-full w-[60px] inline-block absolute opacity-[0.3]"></span>
                                Manajemen Data
                            </div>
                            <div className="text-5xl font-black text-gray-800">
                                Pengambilan Keputusan Berbasis Data
                            </div>
                            <div className="text-lg font-medium text-gray-500">
                                Masukkan data, dan biarkan sistem kami
                                menganalisisnya untuk membantu Anda mengambil
                                keputusan yang lebih terarah.
                            </div>
                        </div>
                    </div>
                </div>

                {/* I Do Section */}
                <div className="relative">
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1440 320"
                        >
                            <path
                                fill="#bfdbfe"
                                fillOpacity="1"
                                d="M0,128L120,106.7C240,85,480,43,720,42.7C960,43,1200,85,1320,106.7L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
                            ></path>
                        </svg>
                    </div>
                    <div className="px-44 bg-blue-200 h-60 absolute top-32 space-y-10">
                        <div className="text-center space-y-5 px-44">
                            <div className="font-black text-5xl text-gray-800 relative">
                                <span className="bg-sky-500 top-6 left-10 h-[6px] w-[100px] inline-block absolute rounded-[50%] my-0 mx-auto rotate-[160deg]"></span>
                                <div className="z-10 absolute left-10">
                                    Apa Yang Saya Kerjakan
                                </div>
                            </div>
                            <div className="font-medium text-lg text-gray-500 pt-20">
                                Sistem ini menggunakan metode Fuzzy Tsukamoto
                                dan dikembangkan dengan model Waterfall untuk
                                menghasilkan prediksi yang akurat.
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-10">
                            <div className="flex space-x-5 border rounded-lg p-5 bg-white">
                                <div>
                                    <FontAwesomeIcon
                                        icon={faMagnifyingGlassChart}
                                        className="text-blue-200 fa-2x"
                                    />
                                </div>
                                <div className="space-y-5">
                                    <div className="font-black text-3xl text-gray-800">
                                        Analisis
                                    </div>
                                    <div className="font-medium text-base text-gray-500">
                                        Saya mengidentifikasi 7 parameter air
                                        melalui studi literatur dan pengambilan
                                        sampel air sungai di Karawang.
                                    </div>
                                </div>
                            </div>
                            <div className="flex space-x-5 border rounded-lg p-5 bg-white">
                                <div>
                                    <FontAwesomeIcon
                                        icon={faPenNib}
                                        className="text-blue-200 fa-2x"
                                    />
                                </div>
                                <div className="space-y-5">
                                    <div className="font-black text-3xl text-gray-800">
                                        Desain
                                    </div>
                                    <div className="font-medium text-base text-gray-500">
                                        Saya merancang fitur dan tampilan, serta
                                        mengembangkan komponen SPK untuk
                                        membantu pengambilan keputusan terkait
                                        kualitas air sungai.
                                    </div>
                                </div>
                            </div>
                            <div className="flex space-x-5 border rounded-lg p-5 bg-white">
                                <div>
                                    <FontAwesomeIcon
                                        icon={faCode}
                                        className="text-blue-200 fa-2x"
                                    />
                                </div>
                                <div className="space-y-5">
                                    <div className="font-black text-3xl text-gray-800">
                                        Implementasi
                                    </div>
                                    <div className="font-medium text-base text-gray-500">
                                        Saya menerjemahkan desain UI/UX menjadi
                                        source code dan mengintegrasikan
                                        analisis data ke dalam model SPK.
                                    </div>
                                </div>
                            </div>
                            <div className="flex space-x-5 border rounded-lg p-5 bg-white">
                                <div>
                                    <FontAwesomeIcon
                                        icon={faVial}
                                        className="text-blue-200 fa-2x"
                                    />
                                </div>
                                <div className="space-y-5">
                                    <div className="font-black text-3xl text-gray-800">
                                        Testing
                                    </div>
                                    <div className="font-medium text-base text-gray-500">
                                        Saya melakukan pengujian fungsional dan
                                        non-fungsional pada sistem yang
                                        diimplementasikan dengan data
                                        sesungguhnya dan mendapatkan hasil
                                        memuaskan.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tutorial Section */}
                <div className="pt-[500px] relative">
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1440 320"
                        >
                            <path
                                fill="#bfdbfe"
                                fillOpacity="1"
                                d="M0,128L120,106.7C240,85,480,43,720,42.7C960,43,1200,85,1320,106.7L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
                            ></path>
                        </svg>
                    </div>
                    <div className="flex flex-col justify-center items-center space-y-10 bg-blue-200 w-full absolute -bottom-96">
                        <div className="font-black text-gray-800 text-5xl relative w-full">
                            <span className="bg-sky-500 bottom-5 left-[35%] h-[6px] w-[100px] inline-block absolute rounded-[50%] my-0 mx-auto rotate-[160deg]"></span>
                            <div className="absolute left-[35%] bottom-0">
                                Cara Penggunaan
                            </div>
                        </div>
                        <div className="px-[35%] text-center font-medium text-gray-500 text-lg">
                            Simak video berikut untuk mempelajari cara
                            menggunakan aplikasi ini.
                        </div>
                        <div>
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/-FYlkIVOUA8?si=yf97rL_LuITXoPg5"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className="rounded-lg"
                            ></iframe>
                        </div>
                    </div>
                </div>
                <div
                    className="bg-blue-200 w-full h-[500px]"
                    id="tutorial"
                ></div>

                {/* Benefits Section */}
                <div className="h-screen space-y-10" id="manfaat">
                    <div className="text-center space-y-5">
                        <div className="text-5xl font-black text-gray-800">
                            Manfaat dan Kegunaan
                        </div>
                        <div className="text-lg font-medium text-gray-500 w-96 mx-auto">
                            Pengembangan aplikasi ini memberikan berbagai
                            manfaat, antara lain.
                        </div>
                    </div>
                    <div className="px-44">
                        <div className="flex justify-around items-center text-3xl font-bold border-t-2 border-l-2 border-r-2 rounded-t-lg">
                            <div
                                className={`cursor-pointer w-full text-center ${
                                    view === "teoritis"
                                        ? "text-sky-500 border-b-2 border-sky-500"
                                        : "text-gray-500"
                                }`}
                                onClick={() => setView("teoritis")}
                            >
                                Teoritis
                            </div>
                            <div
                                className={`cursor-pointer w-full text-center ${
                                    view === "praktis"
                                        ? "text-sky-500 border-b-2 border-sky-500"
                                        : "text-gray-500"
                                }`}
                                onClick={() => setView("praktis")}
                            >
                                Praktis
                            </div>
                        </div>
                        <div className="h-80 border-2 rounded-b-lg p-5 text-lg text-gray-500 font-medium">
                            {view === "teoritis" ? (
                                <div>
                                    <ul className="list-disc list-inside">
                                        <li>
                                            Berperan dalam meningkatkan
                                            pengetahuan dan pemahaman mengenai
                                            penerapan metode fuzzy Tsukamoto
                                            dalam Sistem Pendukung Keputusan
                                            (SPK) untuk mengevaluasi kualitas
                                            air sungai khususnya untuk daerah
                                            Karawang.
                                        </li>
                                    </ul>
                                </div>
                            ) : (
                                <ol className="list-disc list-inside space-y-3">
                                    <li>
                                        Membantu pembangunan Sistem Pendukung
                                        Keputusan (SPK) yang efisien untuk
                                        pemantauan kualitas air sungai, sehingga
                                        menjadi alat berharga bagi pengelola
                                        lingkungan.
                                    </li>
                                    <li>
                                        Menjadi dasar untuk pengelolaan sumber
                                        daya air yang lebih optimal di wilayah
                                        Karawang dengan memanfaatkan teknologi
                                        dan kecerdasan buatan.
                                    </li>
                                    <li>
                                        Berpotensi mengurangi risiko kesehatan
                                        masyarakat dan dampak negatif lingkungan
                                        melalui pemantauan dan manajemen yang
                                        lebih efektif terhadap kualitas air
                                        sungai.
                                    </li>
                                    <li>
                                        Menyediakan informasi akurat dan cepat
                                        kepada pihak terkait, seperti
                                        pemerintah, peneliti, dan masyarakat,
                                        untuk pengambilan keputusan yang lebih
                                        tepat terkait kualitas air sungai.
                                    </li>
                                </ol>
                            )}
                        </div>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="h-screen flex items-center" id="kontak">
                    <div className="flex border-2 mx-44 p-10 rounded-lg space-x-5">
                        <div className="space-y-5">
                            <div className="text-3xl font-black text-gray-800">
                                Mari Terhubung
                            </div>
                            <div className="text-lg font-medium text-gray-500">
                                Untuk informasi lebih lanjut tentang aplikasi
                                ini, silakan hubungi saya. Anda juga dapat
                                memberikan saran dan tanggapan terkait bug atau
                                pengembangan aplikasi ini
                            </div>
                            <div>
                                <a
                                    className="bg-cyan-500 rounded-lg w-max text-lg text-white font-bold px-5 py-3"
                                    href="https://wa.me/6283813479771"
                                    target="_blank"
                                >
                                    Hubungi Saya
                                </a>
                            </div>
                        </div>
                        <div className="relative">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                version="1.1"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                xmlns:svgjs="http://svgjs.dev/svgjs"
                                width="400"
                                preserveAspectRatio="none"
                                viewBox="0 0 1200 630"
                            >
                                <g mask='url("#SvgjsMask1304")' fill="none">
                                    <path
                                        d="M-93.2 560.77L-93.2 560.77"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M-93.2 560.77L-70.61 711.46"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M-93.2 560.77L65.98 560.11"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M-70.61 711.46L-70.61 711.46"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M-70.61 711.46L-106.88 789.36"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M-70.61 711.46L38.39 653.16"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M-70.61 711.46L65.98 560.11"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M-70.61 711.46L111.01 853.3"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M-70.61 711.46L225.83 805.89"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M-106.88 789.36L-106.88 789.36"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M-106.88 789.36L38.39 653.16"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M-106.88 789.36L111.01 853.3"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M-106.88 789.36L-93.2 560.77"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M65.98 560.11L65.98 560.11"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M65.98 560.11L38.39 653.16"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M65.98 560.11L221.77 540.78"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M65.98 560.11L261.39 666.41"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M65.98 560.11L-106.88 789.36"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M38.39 653.16L38.39 653.16"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M111.01 853.3L111.01 853.3"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M111.01 853.3L225.83 805.89"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M111.01 853.3L38.39 653.16"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M221.77 540.78L221.77 540.78"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M221.77 540.78L261.39 666.41"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M221.77 540.78L369.27 558.74"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M221.77 540.78L393.56 667.36"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M261.39 666.41L261.39 666.41"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M261.39 666.41L393.56 667.36"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M261.39 666.41L225.83 805.89"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M261.39 666.41L369.27 558.74"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M225.83 805.89L225.83 805.89"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M225.83 805.89L409.83 861.28"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M386.45 358.87L386.45 358.87"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M386.45 358.87L530.64 390.95"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M386.45 358.87L369.27 558.74"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M386.45 358.87L221.77 540.78"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M386.45 358.87L549.4 551.75"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M386.45 358.87L679.62 386.64"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M386.45 358.87L644.25 503.65"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M369.27 558.74L369.27 558.74"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M369.27 558.74L393.56 667.36"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M369.27 558.74L549.4 551.75"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M369.27 558.74L544.37 692.99"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M393.56 667.36L393.56 667.36"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M409.83 861.28L409.83 861.28"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M409.83 861.28L548.81 804.1"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M409.83 861.28L393.56 667.36"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M530.64 390.95L530.64 390.95"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M530.64 390.95L679.62 386.64"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M530.64 390.95L644.25 503.65"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M530.64 390.95L549.4 551.75"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M549.4 551.75L549.4 551.75"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M549.4 551.75L644.25 503.65"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M549.4 551.75L544.37 692.99"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M549.4 551.75L658.8 666.43"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M544.37 692.99L544.37 692.99"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M544.37 692.99L548.81 804.1"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M544.37 692.99L658.8 666.43"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M544.37 692.99L393.56 667.36"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M548.81 804.1L548.81 804.1"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M548.81 804.1L659.19 855.14"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M548.81 804.1L658.8 666.43"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M548.81 804.1L393.56 667.36"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M698.05 104.08L698.05 104.08"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M698.05 104.08L812.1 212.14"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M698.05 104.08L859.22 85.26"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M698.05 104.08L790.44 -105.77"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M698.05 104.08L679.62 386.64"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M679.62 386.64L679.62 386.64"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M679.62 386.64L644.25 503.65"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M644.25 503.65L644.25 503.65"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M644.25 503.65L658.8 666.43"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M658.8 666.43L658.8 666.43"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M659.19 855.14L659.19 855.14"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M659.19 855.14L829.77 856.99"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M659.19 855.14L658.8 666.43"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M659.19 855.14L544.37 692.99"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M659.19 855.14L833.01 704.77"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M659.19 855.14L409.83 861.28"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M790.44 -105.77L790.44 -105.77"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M790.44 -105.77L961.45 -87.95"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M790.44 -105.77L859.22 85.26"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M859.22 85.26L859.22 85.26"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M859.22 85.26L983.08 57.9"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M859.22 85.26L812.1 212.14"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M812.1 212.14L812.1 212.14"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M812.1 212.14L820.06 367.32"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M820.06 367.32L820.06 367.32"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M820.06 367.32L957.55 343.13"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M820.06 367.32L679.62 386.64"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M820.06 367.32L857.25 530.11"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M820.06 367.32L959.95 260.27"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M857.25 530.11L857.25 530.11"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M857.25 530.11L972.41 545.67"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M857.25 530.11L939.09 669.07"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M857.25 530.11L833.01 704.77"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M833.01 704.77L833.01 704.77"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M833.01 704.77L939.09 669.07"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M833.01 704.77L829.77 856.99"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M833.01 704.77L955.63 825.11"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M829.77 856.99L829.77 856.99"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M829.77 856.99L955.63 825.11"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M961.45 -87.95L961.45 -87.95"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M961.45 -87.95L983.08 57.9"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M961.45 -87.95L1137.61 -79.44"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M961.45 -87.95L859.22 85.26"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M961.45 -87.95L1142.05 97.76"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M961.45 -87.95L698.05 104.08"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M983.08 57.9L983.08 57.9"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M983.08 57.9L1142.05 97.76"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M983.08 57.9L959.95 260.27"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M983.08 57.9L1137.61 -79.44"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M983.08 57.9L812.1 212.14"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M959.95 260.27L959.95 260.27"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M959.95 260.27L957.55 343.13"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M959.95 260.27L812.1 212.14"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M957.55 343.13L957.55 343.13"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M957.55 343.13L1111.53 371.01"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M957.55 343.13L812.1 212.14"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M972.41 545.67L972.41 545.67"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M972.41 545.67L939.09 669.07"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M972.41 545.67L1143.93 551.85"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M972.41 545.67L1115.06 649.84"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M972.41 545.67L957.55 343.13"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M972.41 545.67L833.01 704.77"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M939.09 669.07L939.09 669.07"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M955.63 825.11L955.63 825.11"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M955.63 825.11L1091.44 815.84"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M955.63 825.11L939.09 669.07"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1137.61 -79.44L1137.61 -79.44"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1137.61 -79.44L1289.89 -40.46"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1142.05 97.76L1142.05 97.76"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1142.05 97.76L1137.61 -79.44"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1142.05 97.76L1289.89 -40.46"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1142.05 97.76L1304.31 234.64"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1142.05 97.76L959.95 260.27"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1111.53 371.01L1111.53 371.01"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1143.93 551.85L1143.93 551.85"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1143.93 551.85L1115.06 649.84"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1143.93 551.85L1254.9 535.72"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1143.93 551.85L1111.53 371.01"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1143.93 551.85L1306.3 667.05"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1115.06 649.84L1115.06 649.84"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1115.06 649.84L1091.44 815.84"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1115.06 649.84L939.09 669.07"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1115.06 649.84L1254.9 535.72"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1115.06 649.84L1306.3 667.05"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1091.44 815.84L1091.44 815.84"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1091.44 815.84L939.09 669.07"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1091.44 815.84L1308.24 822.76"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1091.44 815.84L1306.3 667.05"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1289.89 -40.46L1289.89 -40.46"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1289.89 -40.46L1304.31 234.64"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1304.31 234.64L1304.31 234.64"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1304.31 234.64L1298.06 375.45"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1304.31 234.64L1111.53 371.01"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1298.06 375.45L1298.06 375.45"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1298.06 375.45L1254.9 535.72"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1298.06 375.45L1111.53 371.01"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1298.06 375.45L1143.93 551.85"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1254.9 535.72L1254.9 535.72"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1254.9 535.72L1306.3 667.05"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1306.3 667.05L1306.3 667.05"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1306.3 667.05L1308.24 822.76"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1308.24 822.76L1308.24 822.76"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1308.24 822.76L1115.06 649.84"
                                        stroke="rgba(107, 114, 128, 1)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <circle
                                        r="5"
                                        cx="-93.2"
                                        cy="560.77"
                                        fill="rgba(107, 114, 128, 1)"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="-70.61"
                                        cy="711.46"
                                        fill="rgba(107, 114, 128, 1)"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="-106.88"
                                        cy="789.36"
                                        fill="rgba(107, 114, 128, 1)"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="65.98"
                                        cy="560.11"
                                        fill="rgba(107, 114, 128, 1)"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="38.39"
                                        cy="653.16"
                                        fill="rgba(107, 114, 128, 1)"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="111.01"
                                        cy="853.3"
                                        fill="rgba(107, 114, 128, 1)"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="221.77"
                                        cy="540.78"
                                        fill="rgba(107, 114, 128, 1)"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="261.39"
                                        cy="666.41"
                                        fill="rgba(107, 114, 128, 1)"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="225.83"
                                        cy="805.89"
                                        fill="rgba(107, 114, 128, 1)"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="386.45"
                                        cy="358.87"
                                        fill="rgba(107, 114, 128, 1)"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="369.27"
                                        cy="558.74"
                                        fill="rgba(107, 114, 128, 1)"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="393.56"
                                        cy="667.36"
                                        fill="rgba(107, 114, 128, 1)"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="409.83"
                                        cy="861.28"
                                        fill="rgba(107, 114, 128, 1)"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="530.64"
                                        cy="390.95"
                                        fill="rgba(107, 114, 128, 1)"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="549.4"
                                        cy="551.75"
                                        fill="rgba(107, 114, 128, 1)"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="544.37"
                                        cy="692.99"
                                        fill="rgba(107, 114, 128, 1)"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="548.81"
                                        cy="804.1"
                                        fill="rgba(107, 114, 128, 1)"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="698.05"
                                        cy="104.08"
                                        fill="rgba(107, 114, 128, 1)"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="679.62"
                                        cy="386.64"
                                        fill="rgba(107, 114, 128, 1)"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="644.25"
                                        cy="503.65"
                                        fill="rgba(107, 114, 128, 1)"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="658.8"
                                        cy="666.43"
                                        fill="rgba(107, 114, 128, 1)"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="659.19"
                                        cy="855.14"
                                        fill="rgba(107, 114, 128, 1)"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="790.44"
                                        cy="-105.77"
                                        fill="rgba(107, 114, 128, 1)"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="859.22"
                                        cy="85.26"
                                        fill="rgba(107, 114, 128, 1)"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="812.1"
                                        cy="212.14"
                                        fill="rgba(107, 114, 128, 1)"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="820.06"
                                        cy="367.32"
                                        fill="rgba(107, 114, 128, 1)"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="857.25"
                                        cy="530.11"
                                        fill="rgba(107, 114, 128, 1)"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="833.01"
                                        cy="704.77"
                                        fill="rgba(107, 114, 128, 1)"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="829.77"
                                        cy="856.99"
                                        fill="rgba(107, 114, 128, 1)"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="961.45"
                                        cy="-87.95"
                                        fill="rgba(107, 114, 128, 1)"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="983.08"
                                        cy="57.9"
                                        fill="rgba(107, 114, 128, 1)"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="959.95"
                                        cy="260.27"
                                        fill="rgba(107, 114, 128, 1)"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="957.55"
                                        cy="343.13"
                                        fill="rgba(107, 114, 128, 1)"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="972.41"
                                        cy="545.67"
                                        fill="rgba(107, 114, 128, 1)"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="939.09"
                                        cy="669.07"
                                        fill="rgba(107, 114, 128, 1)"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="955.63"
                                        cy="825.11"
                                        fill="rgba(107, 114, 128, 1)"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="1137.61"
                                        cy="-79.44"
                                        fill="rgba(107, 114, 128, 1)"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="1142.05"
                                        cy="97.76"
                                        fill="rgba(107, 114, 128, 1)"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="1111.53"
                                        cy="371.01"
                                        fill="rgba(107, 114, 128, 1)"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="1143.93"
                                        cy="551.85"
                                        fill="rgba(107, 114, 128, 1)"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="1115.06"
                                        cy="649.84"
                                        fill="rgba(107, 114, 128, 1)"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="1091.44"
                                        cy="815.84"
                                        fill="rgba(107, 114, 128, 1)"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="1289.89"
                                        cy="-40.46"
                                        fill="rgba(107, 114, 128, 1)"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="1304.31"
                                        cy="234.64"
                                        fill="rgba(107, 114, 128, 1)"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="1298.06"
                                        cy="375.45"
                                        fill="rgba(107, 114, 128, 1)"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="1254.9"
                                        cy="535.72"
                                        fill="rgba(107, 114, 128, 1)"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="1306.3"
                                        cy="667.05"
                                        fill="rgba(107, 114, 128, 1)"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="1308.24"
                                        cy="822.76"
                                        fill="rgba(107, 114, 128, 1)"
                                    ></circle>
                                    <path
                                        d="M221.92 810.72L221.92 810.72"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M221.92 810.72L108.92 857.53"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M221.92 810.72L219.95 646.77"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M221.92 810.72L384.41 836"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M221.92 810.72L412 691.2"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M853.85 357.57L853.85 357.57"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M853.85 357.57L831.46 261.18"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M853.85 357.57L970.5 411.98"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M853.85 357.57L959.87 510.99"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M815.8 552.71L815.8 552.71"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M815.8 552.71L859.28 659.88"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M815.8 552.71L687.72 534.52"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M815.8 552.71L959.87 510.99"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M815.8 552.71L956.18 644.37"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M815.8 552.71L853.85 357.57"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M859.28 659.88L859.28 659.88"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M859.28 659.88L956.18 644.37"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M859.28 659.88L854.97 807.79"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1162.06 -101.68L1162.06 -101.68"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1162.06 -101.68L1300.14 -97.38"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1162.06 -101.68L1123.75 46.69"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1162.06 -101.68L965.23 -85.34"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1162.06 -101.68L1281.9 83.73"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1162.06 -101.68L961.03 71.3"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1162.06 -101.68L1253.61 219.53"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1112.73 367.1L1112.73 367.1"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1112.73 367.1L1094.4 245.53"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1112.73 367.1L1245.67 354.49"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1112.73 367.1L1105.5 506.21"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1112.73 367.1L970.5 411.98"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1112.73 367.1L987.03 207.03"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1112.73 367.1L1253.61 219.53"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1300.14 -97.38L1300.14 -97.38"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1300.14 -97.38L1281.9 83.73"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1300.14 -97.38L1123.75 46.69"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M-71.36 647.58L-71.36 647.58"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M-71.36 647.58L-77.47 848.94"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M-71.36 647.58L108.92 857.53"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M-71.36 647.58L219.95 646.77"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M-71.36 647.58L226.78 557.62"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M-71.36 647.58L221.92 810.72"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M-71.36 647.58L387.58 492.15"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M-77.47 848.94L-77.47 848.94"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M-77.47 848.94L108.92 857.53"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M-77.47 848.94L221.92 810.72"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M-77.47 848.94L219.95 646.77"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M-77.47 848.94L226.78 557.62"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M-77.47 848.94L384.41 836"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M108.92 857.53L108.92 857.53"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M108.92 857.53L219.95 646.77"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M108.92 857.53L384.41 836"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M226.78 557.62L226.78 557.62"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M226.78 557.62L219.95 646.77"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M226.78 557.62L387.58 492.15"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M226.78 557.62L412 691.2"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M219.95 646.77L219.95 646.77"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M219.95 646.77L412 691.2"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M387.58 492.15L387.58 492.15"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M387.58 492.15L508.1 551.97"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M387.58 492.15L412 691.2"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M412 691.2L412 691.2"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M412 691.2L492.44 682.97"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M412 691.2L384.41 836"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M384.41 836L384.41 836"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M384.41 836L499.64 860.6"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M508.1 551.97L508.1 551.97"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M508.1 551.97L492.44 682.97"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M508.1 551.97L412 691.2"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M508.1 551.97L687.72 534.52"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M508.1 551.97L651.89 680.96"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M492.44 682.97L492.44 682.97"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M492.44 682.97L651.89 680.96"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M492.44 682.97L499.64 860.6"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M492.44 682.97L384.41 836"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M499.64 860.6L499.64 860.6"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M499.64 860.6L412 691.2"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M499.64 860.6L689.5 805.39"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M499.64 860.6L651.89 680.96"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M687.72 534.52L687.72 534.52"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M687.72 534.52L651.89 680.96"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M687.72 534.52L859.28 659.88"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M651.89 680.96L651.89 680.96"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M651.89 680.96L689.5 805.39"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M651.89 680.96L815.8 552.71"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M689.5 805.39L689.5 805.39"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M689.5 805.39L854.97 807.79"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M689.5 805.39L859.28 659.88"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M831.46 261.18L831.46 261.18"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M831.46 261.18L987.03 207.03"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M831.46 261.18L970.5 411.98"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M831.46 261.18L961.03 71.3"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M831.46 261.18L1094.4 245.53"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M854.97 807.79L854.97 807.79"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M854.97 807.79L971.22 820.22"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M854.97 807.79L956.18 644.37"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M854.97 807.79L651.89 680.96"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M854.97 807.79L815.8 552.71"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M965.23 -85.34L965.23 -85.34"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M965.23 -85.34L961.03 71.3"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M961.03 71.3L961.03 71.3"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M961.03 71.3L987.03 207.03"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M987.03 207.03L987.03 207.03"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M987.03 207.03L1094.4 245.53"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M987.03 207.03L853.85 357.57"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M970.5 411.98L970.5 411.98"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M970.5 411.98L959.87 510.99"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M970.5 411.98L1105.5 506.21"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M959.87 510.99L959.87 510.99"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M959.87 510.99L956.18 644.37"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M959.87 510.99L1105.5 506.21"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M959.87 510.99L859.28 659.88"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M956.18 644.37L956.18 644.37"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M956.18 644.37L971.22 820.22"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M971.22 820.22L971.22 820.22"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M971.22 820.22L1133.91 797.52"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1123.75 46.69L1123.75 46.69"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1123.75 46.69L1281.9 83.73"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1094.4 245.53L1094.4 245.53"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1105.5 506.21L1105.5 506.21"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1105.5 506.21L1136.29 646.41"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1136.29 646.41L1136.29 646.41"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1136.29 646.41L1257.73 701.43"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1133.91 797.52L1133.91 797.52"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1133.91 797.52L1136.29 646.41"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1133.91 797.52L1257.73 701.43"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1133.91 797.52L956.18 644.37"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1133.91 797.52L854.97 807.79"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1281.9 83.73L1281.9 83.73"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1281.9 83.73L1253.61 219.53"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1253.61 219.53L1253.61 219.53"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1253.61 219.53L1245.67 354.49"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1253.61 219.53L1094.4 245.53"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1245.67 354.49L1245.67 354.49"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1245.67 354.49L1094.4 245.53"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1245.67 354.49L1278.41 550.62"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1245.67 354.49L1105.5 506.21"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1278.41 550.62L1278.41 550.62"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1278.41 550.62L1257.73 701.43"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1278.41 550.62L1136.29 646.41"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1278.41 550.62L1105.5 506.21"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1278.41 550.62L1112.73 367.1"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        d="M1257.73 701.43L1257.73 701.43"
                                        stroke="hsl(215, 27.9%, 21.9%)"
                                        strokeWidth="1.5"
                                    ></path>
                                    <circle
                                        r="25"
                                        cx="221.92"
                                        cy="810.72"
                                        fill='url("#SvgjsRadialGradient1305")'
                                    ></circle>
                                    <circle
                                        r="25"
                                        cx="853.85"
                                        cy="357.57"
                                        fill='url("#SvgjsRadialGradient1305")'
                                    ></circle>
                                    <circle
                                        r="25"
                                        cx="815.8"
                                        cy="552.71"
                                        fill='url("#SvgjsRadialGradient1305")'
                                    ></circle>
                                    <circle
                                        r="25"
                                        cx="859.28"
                                        cy="659.88"
                                        fill='url("#SvgjsRadialGradient1305")'
                                    ></circle>
                                    <circle
                                        r="25"
                                        cx="1162.06"
                                        cy="-101.68"
                                        fill='url("#SvgjsRadialGradient1305")'
                                    ></circle>
                                    <circle
                                        r="25"
                                        cx="1112.73"
                                        cy="367.1"
                                        fill='url("#SvgjsRadialGradient1305")'
                                    ></circle>
                                    <circle
                                        r="25"
                                        cx="1300.14"
                                        cy="-97.38"
                                        fill='url("#SvgjsRadialGradient1305")'
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="-71.36"
                                        cy="647.58"
                                        fill="#8f949b"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="-77.47"
                                        cy="848.94"
                                        fill="#8f949b"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="108.92"
                                        cy="857.53"
                                        fill="#8f949b"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="226.78"
                                        cy="557.62"
                                        fill="#8f949b"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="219.95"
                                        cy="646.77"
                                        fill="#8f949b"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="387.58"
                                        cy="492.15"
                                        fill="#8f949b"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="412"
                                        cy="691.2"
                                        fill="#8f949b"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="384.41"
                                        cy="836"
                                        fill="#8f949b"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="508.1"
                                        cy="551.97"
                                        fill="#8f949b"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="492.44"
                                        cy="682.97"
                                        fill="#8f949b"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="499.64"
                                        cy="860.6"
                                        fill="#8f949b"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="687.72"
                                        cy="534.52"
                                        fill="#8f949b"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="651.89"
                                        cy="680.96"
                                        fill="#8f949b"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="689.5"
                                        cy="805.39"
                                        fill="#8f949b"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="831.46"
                                        cy="261.18"
                                        fill="#8f949b"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="854.97"
                                        cy="807.79"
                                        fill="#8f949b"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="965.23"
                                        cy="-85.34"
                                        fill="#8f949b"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="961.03"
                                        cy="71.3"
                                        fill="#8f949b"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="987.03"
                                        cy="207.03"
                                        fill="#8f949b"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="970.5"
                                        cy="411.98"
                                        fill="#8f949b"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="959.87"
                                        cy="510.99"
                                        fill="#8f949b"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="956.18"
                                        cy="644.37"
                                        fill="#8f949b"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="971.22"
                                        cy="820.22"
                                        fill="#8f949b"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="1123.75"
                                        cy="46.69"
                                        fill="#8f949b"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="1094.4"
                                        cy="245.53"
                                        fill="#8f949b"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="1105.5"
                                        cy="506.21"
                                        fill="#8f949b"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="1136.29"
                                        cy="646.41"
                                        fill="#8f949b"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="1133.91"
                                        cy="797.52"
                                        fill="#8f949b"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="1281.9"
                                        cy="83.73"
                                        fill="#8f949b"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="1253.61"
                                        cy="219.53"
                                        fill="#8f949b"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="1245.67"
                                        cy="354.49"
                                        fill="#8f949b"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="1278.41"
                                        cy="550.62"
                                        fill="#8f949b"
                                    ></circle>
                                    <circle
                                        r="5"
                                        cx="1257.73"
                                        cy="701.43"
                                        fill="#8f949b"
                                    ></circle>
                                </g>
                                <defs>
                                    <mask id="SvgjsMask1304">
                                        <rect
                                            width="1200"
                                            height="630"
                                            fill="#ffffff"
                                        ></rect>
                                    </mask>
                                    <radialGradient id="SvgjsRadialGradient1305">
                                        <stop
                                            stopColor="#ffffff"
                                            offset="0.1"
                                        ></stop>
                                        <stop
                                            stopColor="rgba(31, 41, 55, 1)"
                                            offset="0.2"
                                        ></stop>
                                        <stop
                                            stopColor="rgba(31, 41, 55, 0)"
                                            offset="1"
                                        ></stop>
                                    </radialGradient>
                                </defs>
                            </svg>
                            <FontAwesomeIcon
                                icon={faMessage}
                                className="fa-8x text-cyan-500 bg-white border p-3 rounded-lg shadow-lg absolute left-[40%] top-10"
                            />
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="bg-blue-200 px-44 py-10 flex justify-between">
                    <div className="font-bold text-gray-800">
                        <div>
                            Sistem Pendukung Keputusan Penentuan Kualitas Air
                            Sungai
                        </div>
                        <div>© 2024 Fery Anuar</div>
                    </div>
                    <div className="font-bold text-gray-800">
                        <div>
                            Alamat Email:{" "}
                            <a
                                href="mailto:feryanuar24@gmail.com"
                                target="_blank"
                                className="hover:text-cyan-500"
                            >
                                feryanuar24@gmail.com
                            </a>
                        </div>
                        <div>
                            Nomor Telepon:{" "}
                            <a
                                href="tel:+6283813479771"
                                target="_blank"
                                className="hover:text-cyan-500"
                            >
                                +6283813479771
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
