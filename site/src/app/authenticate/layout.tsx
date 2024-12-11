import Image from 'next/image';

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="w-full min-h-full flex flex-col gap-8 row-start-2 items-center">
            <div className="min-h-full flex flex-row gap-8">
                <Image
                    className="m-auto mt-0"
                    src="/datadog_logo.svg"
                    alt="Datadog logo"
                    width={280}
                    height={280}
                />
                <div className="w-[400px]">{children}</div>
            </div>
        </main>
    );
}
