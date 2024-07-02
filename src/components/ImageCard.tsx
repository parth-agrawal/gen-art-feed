type Props = {
    description: string
    children: React.ReactNode
}

export default function ImageCard({ description, children }: Props) {
    return (
        <figure className="w-[75%] h- overflow-hidden rounded-base border-2 border-border dark:border-darkBorder bg- font-base shadow-light dark:shadow-dark">
            {children}
            <figcaption className="w-full border-t-2 text-text border-border bg-main dark:border-darkBorder p-4">
                {description}
            </figcaption>
        </figure>
    )
}