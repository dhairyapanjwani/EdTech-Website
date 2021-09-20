import { Fragment, useState, useContext } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import reactPng from '../../assets/images/react.png';
import nodePng from '../../assets/images/node-js.png';
import pyPng from '../../assets/images/django.png';
import codePng from '../../assets/images/code.png';
import { GlobalContext } from '../../GlobalContext';

const stack = [
  {
    id: 1,
    name: 'ReactJS',
    avatar: reactPng,
  },
  {
    id: 2,
    name: 'NodeJS',
    avatar: nodePng,
  },
  {
    id: 3,
    name: 'Python Django',
    avatar: pyPng,
  },
  {
    id: 4,
    name: 'Fullstack Django',
    avatar: codePng,
  },
  {
    id: 5,
    name: 'Fullstack Node',
    avatar: codePng,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function TailwindSelect() {
  const { courseSelection } = useContext(GlobalContext);
  const [ selected, setSelected ] = courseSelection;

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          {/* <Listbox.Label className="block text-sm font-medium text-gray-700">Select Course</Listbox.Label> */}
          <div className="relative">
            <Listbox.Button className="relative w-full bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 border border-blueGray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" style={{ paddingTop: 12, paddingBottom: 12 }}>
              <span className="flex items-center">
                <img src={selected.avatar} alt="" className="flex-shrink-0 h-6 w-6 rounded-full" />
                <span className="ml-3 block truncate">{selected.name}</span>
              </span>
              <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm dark:text-gray-300 dark:bg-gray-700">
                {stack.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-indigo-600 dark:text-gray-300 dark:bg-indigo-600' : 'text-gray-900 dark:text-gray-300 dark:bg-gray-700',
                        'cursor-default select-none relative py-2 pl-3 pr-9'
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <img src={person.avatar} alt="" className="flex-shrink-0 h-6 w-6 rounded-full" />
                          <span
                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                          >
                            {person.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}