import React, { useState,  } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { Field, Label, Switch } from '@headlessui/react'

interface FormData {
  firstName: string
  lastName: string
  company: string
  email: string
  phone: string
  message: string
}

function Contacto() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  })
  const [acuerdo, setAcuerdo] = useState(false)
  const [mensajeEnviado, setMensajeEnviado] = useState(false)
 const navigate = useNavigate()

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    const fullMessage = `
Nombre: ${formData.firstName} ${formData.lastName}
Empresa: ${formData.company}
Correo: ${formData.email}
Teléfono: ${formData.phone}
Mensaje: ${formData.message}
    `

    try {
      await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
    } catch (error) {
      console.error('Error al enviar correo:', error)
    }

    setMensajeEnviado(true)

    const numero = '51912345678' // Reemplaza con tu número real
    const mensaje = encodeURIComponent(fullMessage)
    window.open(`https://wa.me/${numero}?text=${mensaje}`, '_blank')

    setTimeout(() => {
      navigate('/')
    }, 3000)
  }

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[72.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[117.1875rem]"
        />
      </div>

      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Contáctanos
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          ¿Tienes dudas o quieres hablar con nosotros? Completa el formulario y te responderemos pronto.
        </p>
      </div>

      {mensajeEnviado && (
        <div className="mx-auto mt-10 max-w-xl rounded-md bg-green-100 px-4 py-3 text-center text-green-800 shadow">
          ✅ Tu mensaje fue enviado con éxito. Serás redirigido al inicio...
        </div>
      )}

      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="firstName" className="block text-sm font-semibold text-gray-900">
              Nombre
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="mt-2.5 block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-semibold text-gray-900">
              Apellido
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="mt-2.5 block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm font-semibold text-gray-900">
              Empresa
            </label>
            <input
              id="company"
              name="company"
              type="text"
              value={formData.company}
              onChange={handleChange}
              className="mt-2.5 block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-900">
              Correo electrónico
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-2.5 block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-900">
              Número de teléfono
            </label>
            <div className="mt-2.5 flex rounded-md bg-white outline-1 outline-gray-300 has-[input:focus]:outline-indigo-600">
              <div className="relative">
                <select
                  id="country"
                  name="country"
                  className="appearance-none rounded-md py-2 pr-7 pl-3.5 text-base text-gray-500 focus:outline-indigo-600"
                >
                  <option>PE</option>
                  <option>AR</option>
                  <option>MX</option>
                  <option>CL</option>
                </select>
                <ChevronDownIcon className="absolute right-2 top-1/2 size-5 -translate-y-1/2 text-gray-500" />
              </div>
              <input
                id="phone"
                name="phone"
                type="text"
                value={formData.phone}
                onChange={handleChange}
                placeholder="912 345 678"
                required
                className="block w-full px-3 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold text-gray-900">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-2.5 block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600"
            />
          </div>
          <Field className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={acuerdo}
                onChange={setAcuerdo}
                className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out data-checked:bg-indigo-600"
              >
                <span className="sr-only">Aceptar política</span>
                <span
                  aria-hidden="true"
                  className="size-4 transform rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-checked:translate-x-3.5"
                />
              </Switch>
            </div>
            <Label className="text-sm text-gray-600">
              Al seleccionar esto, aceptas nuestra{' '}
              <a href="#" className="font-semibold text-indigo-600">
                política de privacidad
              </a>.
            </Label>
          </Field>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus:outline-indigo-600"
          >
            Enviar mensaje
          </button>
        </div>
      </form>
    </div>
  )
}

export default Contacto
