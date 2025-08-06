import React from 'react'
import Menu from '../Menu'

export default function page  ()  {
  return (
    <div>
        <Menu/>
        <div className="mt-44 grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
  <a
    href="https://my-app.vercel.app"
    target="_blank"
    rel="noopener noreferrer"
    className="block p-4 border rounded-lg shadow hover:shadow-md transition"
  >
    <h2 className="text-xl font-semibold">پروژه اول</h2>
    <p className="text-gray-600">توضیح کوتاه درباره پروژه.</p>
  </a>
  <a
    href="https://another-project.vercel.app"
    target="_blank"
    rel="noopener noreferrer"
    className="block p-4 border rounded-lg shadow hover:shadow-md transition"
  >
    <h2 className="text-xl font-semibold">پروژه دوم</h2>
    <p className="text-gray-600">یه توضیح دیگه برای پروژه بعدی.</p>
  </a>
</div>

    </div>
  )
}
