interface PrimaryButtonProps {
    variant: "simple"; // "simple" for Normal variant [there is no other variant for now]
    text: string;
}

export const PrimaryButton = ({variant, text}: PrimaryButtonProps) => {
    const outlineBaseStyles = "w-40 h-13 rounded-lg border border-white bg-transparent flex justify-center items-center p-0.5"; // Button Container styling
    const solidBaseStyles = "w-full h-full rounded-md bg-white flex justify-center items-center p-2"; // Inner Button styling

    const textBaseStyles = "font-[Roboto] text-lg font-medium"; // Button text styling

    return (
        <button className={outlineBaseStyles}> {/* Button Container */}
            <div className={`${solidBaseStyles} ${textBaseStyles}`}> {/* Inner Button */}
                {text}
            </div>
        </button>
    );
}