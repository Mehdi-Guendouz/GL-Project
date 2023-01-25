import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/24/solid'

const categories = [
    { name: '-' },
    { name: 'Primaire' },
    { name: 'CEM' },
    { name: 'LYCEE' },
  ];

  export default function ListboxCateg() {
    const [selected, setSelected] = useState(categories[0])

    return (
        <div className='w-full h-[140px]'>
            <Listbox value={selected} onChange={setSelected}>
                <div className="relative mt-1">
                    <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-3 pl-4 pr-10 text-left shadow-md sm:text-sm">
                    <span className="font-medium text-dark block truncate">{selected.name}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"><ChevronUpDownIcon className='w-6 h-6 text-dark' aria-hidden="true"/></span>
                    </Listbox.Button >

                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="absolute mt-2 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg sm:text-sm">
                            {
                                categories.map((category, catIdx) => (
                                    <Listbox.Option
                                        key={catIdx}
                                        className={({ active }) =>
                                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                            active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                            }`
                                        }
                                        value={category}
                                        >
                                        {({ selected }) => (
                                            <>
                                            <span
                                                className={`block truncate ${
                                                selected ? 'font-medium' : 'font-normal'
                                                }`}
                                            >
                                                {category.name}
                                            </span>
                                            {selected ? (
                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                <CheckIcon className="h-3 w-3 stroke-[1.5px] stroke-dark" aria-hidden="true" />
                                                </span>
                                            ) : null}
                                            </>
                                        )}
                                        </Listbox.Option>
                                ))
                            }
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    )



  }