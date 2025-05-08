import HeaderText from "../ui/HeaderText"

const people = [
    {
        name: 'Leonard Krasner',
        role: 'Senior Designer',
        imageUrl:
            'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        xUrl: '#',
        linkedinUrl: '#',
    },
    {
        name: 'Leonard Krasner',
        role: 'Senior Designer',
        imageUrl:
            'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        xUrl: '#',
        linkedinUrl: '#',
    },
    {
        name: 'Leonard Krasner',
        role: 'Senior Designer',
        imageUrl:
            'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        xUrl: '#',
        linkedinUrl: '#',
    },
    // More people...
]

export default function Team() {
    return (
        <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
                <div className="mx-auto max-w-2xl">
                    <HeaderText as="h2" className="text-stone-700">Meet our team</HeaderText>
                    <p className="mt-6 text-lg/8 text-gray-400">
                        We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
                        best results for our clients.
                    </p>
                </div>
                <ul
                    role="list"
                    className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
                >
                    {people.map((person) => (
                        <li key={person.name} className="rounded-2xl px-8 py-10">
                            <img alt="" src={person.imageUrl} className="mx-auto size-48 rounded-full md:size-56" />
                            <h3 className="mt-6 text-base/7 font-semibold tracking-tight text-white">{person.name}</h3>
                            <p className="text-sm/6 text-gray-400">{person.role}</p>

                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
