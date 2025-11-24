"use client";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const items = [
    "KA57F", "KA01F", "KA53F", "KA42F",
    "KA51AJ", "KA41D", "KA42FA", "KA01FA","KA51AH"
];

export default function CustomSelect({ value, onChange }: { value?: string, onChange?: (v: string) => void }) {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState<string | null>(null);

    // ✅ Whenever parent updates prefix, reflect it here
    useEffect(() => {
        if (value) setSelected(value.toUpperCase());
    }, [value]);

    const handleSelect = (item: string) => {
        setSelected(item);
        onChange?.(item); // send back to parent
        setOpen(false);
    };

    return (
        <div className="relative w-full">
            {/* Button */}
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center bg-gray-50 border mt-2 mx-auto border-gray-300 h-14 rounded-md w-56 shadow-sm"
            >
                <span className={`flex-1 truncate ${selected ? "text-xl uppercase pl-4" : "text-gray-400 text-[15px] pl-4"}`}>
                    {selected ? selected : "Select bus number prefix"}
                </span>
                <ChevronDown className={`bg-white h-full w-10 p-2 z-50 rounded-md transition-transform ${open ? "rotate-180" : ""}`} />
            </button>

            {open && (
                <>
               
                    <div
                        className="fixed inset-0 z-2000"
                        onClick={() => setOpen(false)}
                    />

                    <ul className="fixed left-1/2 -translate-x-1/2 top-52 z-3000 bg-white border border-gray-300 rounded-md w-[210px] shadow-lg h-full overflow-auto">
                       <h2 className="text-md border-b py-3 font-sans font-normal p-3 text-center">Select bus number prefix</h2>
                        {items.map((item, idx) => (
                            <li
                                key={idx}
                                className="px-4 py-4 border-b uppercase text-xl cursor-pointer hover:bg-gray-100 text-gray-700 text-center"
                                onClick={() => handleSelect(item)}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
}
