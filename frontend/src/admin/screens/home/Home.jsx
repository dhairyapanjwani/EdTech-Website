import React from 'react';
import { Link } from 'react-router-dom';

const people = [
    {
      category: 'ReactJS',
      title: 'Advanced ReactJS',
      description: 'This Course is for advanced level',
      role: 'Admin',
      image:'',
    },
    {
        category: 'NodeJS',
        title: 'Advanced NodeJS',
        description: 'This Course is for advanced level',
        role: 'Admin',
        image:'',
      },
      {
        category: 'FullStack',
        title: 'Advanced FullStack',
        description: 'This Course is for advanced level',
        role: 'Admin',
        image:'',
      },
    // More people...
  ]
  
  export default function Example() {
    return (
      <div className="flex flex-col">
      <h2 className="mt-4 text-center text-3xl font-extrabold text-gray-900 dark:text-gray-300">Edit courses</h2>
          <div className="py-2 align-middle inline-block sm:px-6 lg:px-96">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Category
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Title
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Delete</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {people.map((person) => (
                    <tr key={''}>
                      <td className="px-2 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{person.category}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{person.title}</div>
                        <div className="text-sm text-gray-500">{person.description}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <Link to={'admin/edit'} className="text-indigo-600 hover:text-indigo-900" >Edit</Link>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="text-indigo-600 hover:text-indigo-900" >Delete</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
          </div>
          <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Upload course</button>
        </div>
      </div>
    )
  }
  