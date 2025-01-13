
export default function ItemList({ titile }: any) {
    return (
        <div className="flex items-center gap-2">
            <span>
                <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.5 0.822571L4.5 7.82226L1 4.32257" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

            </span>
            <span className="text-white text-sm md:text-base md:leading-[28px] -tracking-[0.3px]">{titile}</span>
        </div>
    )
}
