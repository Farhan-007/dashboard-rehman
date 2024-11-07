export default function Card({ children }) {
    return (
        <div className="flex-grow p-3 min-h-28 rounded-md bg-white">
            {children}
        </div>
    )
}