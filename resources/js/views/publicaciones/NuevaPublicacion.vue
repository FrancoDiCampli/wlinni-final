<template>
    <!-- 
        
        agregar-registrar-publicacion (https://xd.adobe.com/view/b3577435-af55-46c5-4321-42f0fe99b140-c566/screen/edaef1db-8cea-4963-8887-edecec3db37f/agregar-registrar-publicacion-/)
        MB-agregar-registrar-publicacion (https://xd.adobe.com/view/b3577435-af55-46c5-4321-42f0fe99b140-c566/screen/039be02f-d3fc-497a-ab2d-d2f19a9dd66b/MB-agregar-registrar-publicacion-/)
    
    -->

    <div class="nueva-publicacion">
        <div class="container-nueva-publicacion">
            <div class="responsive-nueva-publicacion">
                <w-card class="card-nueva-publicacion" :shadow="false">
                    <p class="subtitle bold mt-5 ml-5">Agregar Publicación</p>
                    <p class="ml-5">Agregar la información de la nueva publicación</p>

                    <div class="lg:w-2/3 primary rounded-bl-full rounded-r-full lg:ml-5 mt-6 p-4">
                        <p
                            class="caption white-text truncate"
                        >Configuración flexible y formas de edición, agregue y edite información de listado, fotos y ubicación de la posición</p>
                    </div>

                    <form @submit.prevent>
                        <div class="form-section">
                            <div
                                class="form-header"
                                :class="sections.inmueble ? 'header-active' : ''"
                                @click="
                                windowWidth <= 768
                                    ? (sections.inmueble = !sections.inmueble)
                                    : ''
                            "
                            >
                                <p>Tipo de Inmueble</p>
                                <w-icon icon="arrow-down" h="18px"></w-icon>
                            </div>
                            <div class="form-body" v-if="sections.inmueble">
                                <div class="flex flex-row flex-wrap">
                                    <div class="w-full md:w-1/3 px-2">
                                        <w-select
                                            label="TIPO DE INMUEBLE"
                                            placeholder="Pendientes"
                                            :options="['a', 'b', 'c']"
                                            v-model="form.tipoinmueble"
                                        ></w-select>
                                    </div>
                                    <div class="w-full md:w-1/3 px-2">
                                        <w-select
                                            label="SUB-TIPO INMUEBLE"
                                            placeholder="Pendientes"
                                            :options="['a', 'b', 'c']"
                                            v-model="form.tipoinmueble"
                                        ></w-select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-section">
                            <div
                                class="form-header"
                                :class="sections.ubicacion ? 'header-active' : ''"
                                @click="
                                windowWidth <= 768
                                    ? (sections.ubicacion = !sections.ubicacion)
                                    : ''
                            "
                            >
                                <p>Ubicación</p>
                                <w-icon icon="arrow-down" h="18px"></w-icon>
                            </div>
                            <div class="form-body" v-if="sections.ubicacion">
                                <div class="flex flex-row flex-wrap">
                                    <div class="w-full md:w-1/3 px-2">
                                        <w-select
                                            label="Departamento"
                                            placeholder="Elegir departamento..."
                                            :options="['a', 'b', 'c']"
                                            v-model="form.departamento"
                                        >
                                            <template slot="snackbar">
                                                <p class="bold">Importante!</p>
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuadas.</p>
                                            </template>
                                        </w-select>
                                    </div>
                                    <div class="w-full md:w-1/3 px-2">
                                        <w-select
                                            label="PROVINCIAS"
                                            placeholder="Elegir departamento..."
                                            :options="['a', 'b', 'c']"
                                            v-model="form.provincias"
                                        >
                                            <template slot="snackbar">
                                                <p class="bold">Importante!</p>
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuadas.</p>
                                            </template>
                                        </w-select>
                                    </div>
                                </div>
                                <div class="flex flex-row flex-wrap">
                                    <div class="w-full md:w-1/3 px-2">
                                        <w-select
                                            label="DISTRITO"
                                            placeholder="Elegir departamento..."
                                            :options="['a', 'b', 'c']"
                                            v-model="form.distrito"
                                        >
                                            <template slot="snackbar">
                                                <p class="bold">Importante!</p>
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuadas.</p>
                                            </template>
                                        </w-select>
                                    </div>
                                    <div class="w-full md:w-1/3 px-2">
                                        <w-select
                                            label="URBANIZACIÓN"
                                            placeholder="Elegir departamento..."
                                            :options="['a', 'b', 'c']"
                                            v-model="form.urbanizacion"
                                        >
                                            <template slot="snackbar">
                                                <p class="bold">Importante!</p>
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuadas.</p>
                                            </template>
                                        </w-select>
                                    </div>
                                </div>

                                <div class="w-full md:w-1/3 flex flex-row flex-wrap">
                                    <div class="w-full md:w-1/2">
                                        <w-checkbox
                                            label="Mostrar dirección"
                                            v-model="form.mostrardireccion"
                                        ></w-checkbox>
                                    </div>
                                    <div class="w-full md:w-1/2">
                                        <w-checkbox
                                            label="Ocultar dirección"
                                            v-model="form.ocultardireccion"
                                        ></w-checkbox>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-section">
                            <div
                                class="form-header"
                                :class="sections.precio ? 'header-active' : ''"
                                @click="
                                windowWidth <= 768
                                    ? (sections.precio = !sections.precio)
                                    : ''
                            "
                            >
                                <p>Precio</p>
                                <w-icon icon="arrow-down" h="18px"></w-icon>
                            </div>
                            <div class="form-body" v-if="sections.precio">
                                <div class="flex flex-row flex-wrap">
                                    <div class="w-full md:w-1/3 px-2">
                                        <w-select
                                            label="MONEDA"
                                            placeholder="Dolar americanos"
                                            :options="['a', 'b', 'c']"
                                            v-model="form.moneda"
                                        ></w-select>
                                    </div>
                                    <div class="w-full md:w-1/3 px-2">
                                        <w-select
                                            label="PRECIO"
                                            placeholder="S/00"
                                            :options="['a', 'b', 'c']"
                                            v-model="form.precio"
                                        ></w-select>
                                    </div>
                                    <div
                                        class="w-full md:w-1/3 self-center"
                                        style="margin-top: -10px;"
                                    >
                                        <w-checkbox label="Consultar" v-model="form.consultar"></w-checkbox>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-section">
                            <div
                                class="form-header"
                                :class="sections.datos ? 'header-active' : ''"
                                @click="
                                windowWidth <= 768
                                    ? (sections.datos = !sections.datos)
                                    : ''
                            "
                            >
                                <p>Datos del inmueble</p>
                                <w-icon icon="arrow-down" h="18px"></w-icon>
                            </div>
                            <div class="form-body" v-if="sections.datos">
                                <div class="flex flex-row flex-wrap">
                                    <div class="w-full md:w-1/3 px-2">
                                        <w-select
                                            label="AREA TOTAL"
                                            placeholder="0"
                                            :options="['a', 'b', 'c']"
                                            v-model="form.total"
                                        ></w-select>
                                    </div>
                                    <div class="w-full md:w-1/3 px-2">
                                        <w-select
                                            label="AREA CONSTRUIDA"
                                            placeholder="0"
                                            :options="['a', 'b', 'c']"
                                            v-model="form.construida"
                                        ></w-select>
                                    </div>
                                    <div class="w-full md:w-1/3 px-2">
                                        <w-select
                                            label="AREA TERRENO"
                                            placeholder="0"
                                            :options="['a', 'b', 'c']"
                                            v-model="form.terreno"
                                        ></w-select>
                                    </div>

                                    <div class="w-full md:w-1/3 px-2">
                                        <w-select
                                            label="ANTIGUEDAD"
                                            placeholder="0"
                                            :options="['a', 'b', 'c']"
                                            v-model="form.antiguedad"
                                        ></w-select>
                                    </div>
                                    <div class="w-full md:w-1/3 px-2">
                                        <w-select
                                            label="FRENTE"
                                            placeholder="0"
                                            :options="['a', 'b', 'c']"
                                            v-model="form.frente"
                                        ></w-select>
                                    </div>
                                    <div class="w-full md:w-1/3 px-2">
                                        <w-select
                                            label="FONDO"
                                            placeholder="0"
                                            :options="['a', 'b', 'c']"
                                            v-model="form.fondo"
                                        ></w-select>
                                    </div>

                                    <div class="w-full md:w-1/3 px-2">
                                        <w-select
                                            label="AREA TOTAL"
                                            placeholder="0"
                                            :options="['a', 'b', 'c']"
                                            v-model="form.total"
                                        ></w-select>
                                    </div>
                                    <div class="w-full md:w-1/3 px-2">
                                        <w-select
                                            label="AREA CONSTRUIDA"
                                            placeholder="0"
                                            :options="['a', 'b', 'c']"
                                            v-model="form.construida"
                                        ></w-select>
                                    </div>
                                    <div class="w-full md:w-1/3 px-2">
                                        <w-select
                                            label="AREA TERRENO"
                                            placeholder="0"
                                            :options="['a', 'b', 'c']"
                                            v-model="form.terreno"
                                        ></w-select>
                                    </div>

                                    <div class="w-full md:w-1/3 px-2">
                                        <w-select
                                            label="ANTIGUEDAD"
                                            placeholder="0"
                                            :options="['a', 'b', 'c']"
                                            v-model="form.antiguedad"
                                        ></w-select>
                                    </div>
                                    <div class="w-full md:w-1/3 px-2">
                                        <w-select
                                            label="FRENTE"
                                            placeholder="0"
                                            :options="['a', 'b', 'c']"
                                            v-model="form.frente"
                                        ></w-select>
                                    </div>
                                    <div class="w-full md:w-1/3 px-2">
                                        <w-select
                                            label="FONDO"
                                            placeholder="0"
                                            :options="['a', 'b', 'c']"
                                            v-model="form.fondo"
                                        ></w-select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-section">
                            <div
                                class="form-header"
                                :class="sections.servicios ? 'header-active' : ''"
                                @click="
                                windowWidth <= 768
                                    ? (sections.servicios = !sections.servicios)
                                    : ''
                            "
                            >
                                <p>Servicios</p>
                                <w-icon icon="arrow-down" h="18px"></w-icon>
                            </div>
                            <div class="form-body" v-if="sections.servicios">
                                <div class="flex flex-row flex-wrap">
                                    <div class="w-full md:w-1/3 self-center">
                                        <w-checkbox class="ml-5" label="Agua" v-model="form.agua"></w-checkbox>
                                    </div>
                                    <div class="w-full md:w-1/3 self-center">
                                        <w-checkbox class="ml-5" label="Luz" v-model="form.luz"></w-checkbox>
                                    </div>
                                    <div class="w-full md:w-1/3 self-center">
                                        <w-checkbox
                                            class="ml-5"
                                            label="Conexión a gas"
                                            v-model="form.gas"
                                        ></w-checkbox>
                                    </div>
                                    <div class="w-full md:w-1/3 self-center">
                                        <w-checkbox
                                            class="ml-5"
                                            label="Telefono"
                                            v-model="form.telefono"
                                        ></w-checkbox>
                                    </div>
                                    <div class="w-full md:w-1/3 self-center">
                                        <w-checkbox class="ml-5" label="Cable" v-model="form.cable"></w-checkbox>
                                    </div>
                                    <div class="w-full md:w-1/3 self-center">
                                        <w-checkbox
                                            class="ml-5"
                                            label="Internet"
                                            v-model="form.internet"
                                        ></w-checkbox>
                                    </div>
                                    <div class="w-full md:w-1/3 self-center">
                                        <w-checkbox
                                            class="ml-5"
                                            label="Guardia"
                                            v-model="form.guardia"
                                        ></w-checkbox>
                                    </div>
                                    <div class="w-full md:w-1/3 self-center">
                                        <w-checkbox
                                            class="ml-5"
                                            label="Servicio de limpieza"
                                            v-model="form.limpieza"
                                        ></w-checkbox>
                                    </div>
                                    <div class="w-full md:w-1/3 self-center">
                                        <w-checkbox
                                            class="ml-5"
                                            label="Servicio de seguridad"
                                            v-model="form.seguridad"
                                        ></w-checkbox>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-section">
                            <div
                                class="form-header"
                                :class="sections.ambientes ? 'header-active' : ''"
                                @click="
                                windowWidth <= 768
                                    ? (sections.ambientes = !sections.ambientes)
                                    : ''
                            "
                            >
                                <p>Ambientes</p>
                                <w-icon icon="arrow-down" h="18px"></w-icon>
                            </div>
                            <div class="form-body" v-if="sections.ambientes">
                                <div class="flex flex-row flex-wrap">
                                    <div class="w-full md:w-1/3 self-center">
                                        <w-checkbox class="ml-5" label="Agua" v-model="form.agua"></w-checkbox>
                                    </div>
                                    <div class="w-full md:w-1/3 self-center">
                                        <w-checkbox class="ml-5" label="Luz" v-model="form.luz"></w-checkbox>
                                    </div>
                                    <div class="w-full md:w-1/3 self-center">
                                        <w-checkbox
                                            class="ml-5"
                                            label="Conexión a gas"
                                            v-model="form.gas"
                                        ></w-checkbox>
                                    </div>
                                    <div class="w-full md:w-1/3 self-center">
                                        <w-checkbox
                                            class="ml-5"
                                            label="Telefono"
                                            v-model="form.telefono"
                                        ></w-checkbox>
                                    </div>
                                    <div class="w-full md:w-1/3 self-center">
                                        <w-checkbox class="ml-5" label="Cable" v-model="form.cable"></w-checkbox>
                                    </div>
                                    <div class="w-full md:w-1/3 self-center">
                                        <w-checkbox
                                            class="ml-5"
                                            label="Internet"
                                            v-model="form.internet"
                                        ></w-checkbox>
                                    </div>
                                    <div class="w-full md:w-1/3 self-center">
                                        <w-checkbox
                                            class="ml-5"
                                            label="Guardia"
                                            v-model="form.guardia"
                                        ></w-checkbox>
                                    </div>
                                    <div class="w-full md:w-1/3 self-center">
                                        <w-checkbox
                                            class="ml-5"
                                            label="Servicio de limpieza"
                                            v-model="form.limpieza"
                                        ></w-checkbox>
                                    </div>
                                    <div class="w-full md:w-1/3 self-center">
                                        <w-checkbox
                                            class="ml-5"
                                            label="Servicio de seguridad"
                                            v-model="form.seguridad"
                                        ></w-checkbox>
                                    </div>
                                    <div class="w-full md:w-1/3 self-center">
                                        <w-checkbox class="ml-5" label="Agua" v-model="form.agua"></w-checkbox>
                                    </div>
                                    <div class="w-full md:w-1/3 self-center">
                                        <w-checkbox class="ml-5" label="Luz" v-model="form.luz"></w-checkbox>
                                    </div>
                                    <div class="w-full md:w-1/3 self-center">
                                        <w-checkbox
                                            class="ml-5"
                                            label="Conexión a gas"
                                            v-model="form.gas"
                                        ></w-checkbox>
                                    </div>
                                    <div class="w-full md:w-1/3 self-center">
                                        <w-checkbox
                                            class="ml-5"
                                            label="Telefono"
                                            v-model="form.telefono"
                                        ></w-checkbox>
                                    </div>
                                    <div class="w-full md:w-1/3 self-center">
                                        <w-checkbox class="ml-5" label="Cable" v-model="form.cable"></w-checkbox>
                                    </div>
                                    <div class="w-full md:w-1/3 self-center">
                                        <w-checkbox
                                            class="ml-5"
                                            label="Internet"
                                            v-model="form.internet"
                                        ></w-checkbox>
                                    </div>
                                    <div class="w-full md:w-1/3 self-center">
                                        <w-checkbox
                                            class="ml-5"
                                            label="Guardia"
                                            v-model="form.guardia"
                                        ></w-checkbox>
                                    </div>
                                    <div class="w-full md:w-1/3 self-center">
                                        <w-checkbox
                                            class="ml-5"
                                            label="Servicio de limpieza"
                                            v-model="form.limpieza"
                                        ></w-checkbox>
                                    </div>
                                    <div class="w-full md:w-1/3 self-center">
                                        <w-checkbox
                                            class="ml-5"
                                            label="Servicio de seguridad"
                                            v-model="form.seguridad"
                                        ></w-checkbox>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-section">
                            <div
                                class="form-header"
                                :class="
                                sections.areascomunes ? 'header-active' : ''
                            "
                                @click="
                                windowWidth <= 768
                                    ? (sections.areascomunes = !sections.areascomunes)
                                    : ''
                            "
                            >
                                <p>Areas comunes</p>
                                <w-icon icon="arrow-down" h="18px"></w-icon>
                            </div>
                            <div class="form-body" v-if="sections.areascomunes">
                                <div class="flex flex-row flex-wrap">
                                    <div class="w-full md:w-1/3 self-center">
                                        <w-checkbox class="ml-5" label="Agua" v-model="form.agua"></w-checkbox>
                                    </div>
                                    <div class="w-full md:w-1/3 self-center">
                                        <w-checkbox class="ml-5" label="Luz" v-model="form.luz"></w-checkbox>
                                    </div>
                                    <div class="w-full md:w-1/3 self-center">
                                        <w-checkbox
                                            class="ml-5"
                                            label="Conexión a gas"
                                            v-model="form.gas"
                                        ></w-checkbox>
                                    </div>
                                    <div class="w-full md:w-1/3 self-center">
                                        <w-checkbox
                                            class="ml-5"
                                            label="Telefono"
                                            v-model="form.telefono"
                                        ></w-checkbox>
                                    </div>
                                    <div class="w-full md:w-1/3 self-center">
                                        <w-checkbox class="ml-5" label="Cable" v-model="form.cable"></w-checkbox>
                                    </div>
                                    <div class="w-full md:w-1/3 self-center">
                                        <w-checkbox
                                            class="ml-5"
                                            label="Internet"
                                            v-model="form.internet"
                                        ></w-checkbox>
                                    </div>
                                    <div class="w-full md:w-1/3 self-center">
                                        <w-checkbox
                                            class="ml-5"
                                            label="Guardia"
                                            v-model="form.guardia"
                                        ></w-checkbox>
                                    </div>
                                    <div class="w-full md:w-1/3 self-center">
                                        <w-checkbox
                                            class="ml-5"
                                            label="Servicio de limpieza"
                                            v-model="form.limpieza"
                                        ></w-checkbox>
                                    </div>
                                    <div class="w-full md:w-1/3 self-center">
                                        <w-checkbox
                                            class="ml-5"
                                            label="Servicio de seguridad"
                                            v-model="form.seguridad"
                                        ></w-checkbox>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p class="f-header">Enlace de video</p>
                            <div class="flex flex-row flex-wrap">
                                <div class="w-full px-2">
                                    <w-input
                                        label="Enlace de video"
                                        placeholder="Ejemplo: https://www.youtube.com/watch?v=uN5Cux5t0Ak"
                                        v-model="form.video"
                                    ></w-input>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p class="f-header">Medidas de ambiente</p>
                            <div class="flex flex-row flex-wrap">
                                <div class="w-full md:w-1/2 px-2">
                                    <w-input
                                        label="AMBIENTE"
                                        placeholder="Ejemplo: sala, comedor"
                                        v-model="form.ambiente"
                                    ></w-input>
                                </div>
                                <div class="w-full md:w-1/2 px-2">
                                    <w-input
                                        label="AMBIENTE"
                                        placeholder="Ejemplo: sala, comedor"
                                        v-model="form.ambiente"
                                    ></w-input>
                                </div>
                                <div class="w-full px-2">
                                    <w-textarea
                                        label="AMBIENTE"
                                        placeholder="Ejemplo: sala, comedor"
                                        v-model="form.ambiente"
                                    ></w-textarea>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p class="body bold tertiary-text ml-5 mb-4">Locación</p>
                            <p
                                class="ml-5 mb-4"
                            >Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.</p>
                            <mapas-agregar></mapas-agregar>
                        </div>
                        <div class="mt-20">
                            <!-- FOTOS -->
                            <div class="f-header">
                                Fotos
                                <span
                                    class="caption black-text"
                                >({{ form.photos.length }} de 20 disponibles)</span>
                            </div>

                            <div class="w-full">
                                <div class="flex flex-row justify-center">
                                    <w-card :shadow="false" class="upload-file-card">
                                        <div class="flex flex-col items-center">
                                            <w-icon icon="upload-image" h="137px"></w-icon>
                                            <p
                                                class="text-center mt-5"
                                            >Sube fotos desde tu computadora</p>

                                            <w-btn
                                                color="#57BCD1"
                                                :dark="true"
                                                :rounded="true"
                                                :small="true"
                                                :disabled="form.photos.length >= 20 ? true : false"
                                            >
                                                <p>seleccionar fotos</p>
                                                <input
                                                    class="fileInput"
                                                    type="file"
                                                    ref="photoFile"
                                                    accept=".jpg, .jpeg, .png"
                                                    :disabled="form.photos.length >= 20 ? true : false"
                                                    multiple="multiple"
                                                    @change="addPhoto()"
                                                />
                                            </w-btn>
                                            <p class="text-center mt-5">
                                                Formatos permitidos: JPG, JPEG, PNG
                                                (Tamaño máximo: 5Mb)
                                            </p>
                                        </div>
                                        <div class="preview">
                                            <w-carousel
                                                :items="carrouselItems"
                                                :pagination="windowWidth >= 1024 ? false : true"
                                                :navigation="windowWidth >= 1024 ? true : false"
                                                class="preview-carousel"
                                            >
                                                <slide
                                                    class="preview-slide"
                                                    v-for="(media, i) in form.photos"
                                                    :key="i"
                                                >
                                                    <div class="preview-item">
                                                        <div class="preview-source">
                                                            <img :src="media.url" />
                                                            <div
                                                                class="delete-icon"
                                                                @click="removePhoto(media)"
                                                            >×</div>
                                                        </div>
                                                    </div>
                                                </slide>
                                            </w-carousel>
                                        </div>
                                    </w-card>
                                </div>
                            </div>

                            <br />

                            <!-- VIDEOS -->
                            <div class="f-header">
                                Videos
                                <span
                                    class="caption black-text"
                                >({{ form.videos.length }} de 3 disponibles)</span>
                            </div>

                            <div class="w-full">
                                <div class="flex flex-row justify-center">
                                    <w-card :shadow="false" class="upload-file-card">
                                        <div class="flex flex-col items-center">
                                            <w-icon icon="upload-video" h="137px"></w-icon>
                                            <p
                                                class="text-center mt-5"
                                            >Sube videos desde tu computadora</p>

                                            <w-btn
                                                color="#57BCD1"
                                                :dark="true"
                                                :rounded="true"
                                                :small="true"
                                                :disabled="form.videos.length >= 3 ? true : false"
                                            >
                                                <p>seleccionar videos</p>
                                                <input
                                                    class="fileInput"
                                                    type="file"
                                                    ref="videoFile"
                                                    accept=".mp4, .avi"
                                                    :disabled="form.videos.length >= 3 ? true : false"
                                                    multiple="multiple"
                                                    @change="addVideo()"
                                                />
                                            </w-btn>
                                            <p class="text-center mt-5">
                                                Formatos permitidos: JPG, JPEG, PNG
                                                (Tamaño máximo: 5Mb)
                                            </p>
                                        </div>
                                        <div class="preview">
                                            <w-carousel
                                                :items="carrouselItems"
                                                :pagination="windowWidth >= 1024 ? false : true"
                                                :navigation="windowWidth >= 1024 ? true : false"
                                                class="preview-carousel"
                                            >
                                                <slide
                                                    class="preview-slide"
                                                    v-for="(media, i) in form.videos"
                                                    :key="i"
                                                >
                                                    <div class="preview-item">
                                                        <div class="preview-source">
                                                            <video autoplay muted>
                                                                <source :src="media.url" />
                                                            </video>
                                                            <div
                                                                class="delete-icon"
                                                                @click="removeVideo(media)"
                                                            >×</div>
                                                        </div>
                                                    </div>
                                                </slide>
                                            </w-carousel>
                                        </div>
                                    </w-card>
                                </div>
                            </div>

                            <div class="flex flex-row justify-center">
                                <div class="w-full md:w-1/2 px-2 mt-10 mb-20">
                                    <p class="text-center">
                                        Si ha completadp todos los campos y está
                                        seguro de la exactitud de toda la
                                        información, haga clic en el botón a
                                        continuación para guardar los datos
                                    </p>
                                </div>
                            </div>
                            <div class="flex flex-row justify-center">
                                <w-btn :dark="true" :large="true">GUARDAR AVISO</w-btn>
                            </div>
                        </div>
                    </form>
                </w-card>
            </div>
        </div>
    </div>
</template>

<script>
import MapasAgregar from "../../components/mapas/MapasAgregar";

export default {
    data: () => ({
        windowWidth: window.innerWidth,
        sections: {
            inmueble: true,
            ubicacion: true,
            precio: true,
            datos: true,
            servicios: true,
            ambientes: true,
            areascomunes: true,
            video: true
        },
        form: {
            photos: [],
            videos: []
        },
        test: false
    }),

    components: {
        MapasAgregar
    },

    computed: {
        carrouselItems() {
            if (this.windowWidth >= 768) {
                if (this.windowWidth >= 1024) {
                    return this.windowWidth >= 1280 ? 4 : 3;
                } else {
                    return this.windowWidth >= 1024 ? 3 : 2;
                }
            } else {
                return 1;
            }
        }
    },

    mounted() {
        window.addEventListener("resize", () => {
            this.windowWidth = window.innerWidth;
        });
    },

    methods: {
        addPhoto() {
            if (this.form.photos.length < 20) {
                const files = this.$refs["photoFile"].files;
                if (files.length <= Number(20 - this.form.photos.length)) {
                    for (let i = 0; i < files.length; i++) {
                        this.form.photos.push({
                            file: files[i],
                            url: URL.createObjectURL(files[i]),
                            name: files[i].name
                        });
                    }
                } else {
                    alert("has superado el límite máximo de archivos.");
                }
            }
        },

        addVideo() {
            if (this.form.videos.length < 3) {
                const files = this.$refs["videoFile"].files;
                if (files.length <= Number(3 - this.form.videos.length)) {
                    for (let i = 0; i < files.length; i++) {
                        this.form.videos.push({
                            file: files[i],
                            url: URL.createObjectURL(files[i]),
                            name: files[i].name
                        });
                    }
                } else {
                    alert("has superado el límite máximo de archivos.");
                }
            }
        },

        removePhoto(file) {
            let index = this.form.photos.indexOf(file);
            this.form.photos.splice(index, 1);
        },

        removeVideo(file) {
            let index = this.form.videos.indexOf(file);
            this.form.videos.splice(index, 1);
        }
    }
};
</script>

<style lang="scss">
@import "../../components/wlinii_components/sass/_variables.scss";

.nueva-publicacion {
    .container-nueva-publicacion {
        padding: 25px 0px;
        margin: auto;
        .responsive-nueva-publicacion {
            width: 90%;
            max-width: 1180px;
            margin: auto;
            .card-nueva-publicacion {
                .f-header {
                    margin: 0px 0px 42px 20px;
                    font-weight: bold;
                    font-size: 21px;
                    color: $tertiary;
                }

                .form-section {
                    margin: 42px 0px;
                    .form-header {
                        margin: 0px 0px 42px 20px;
                        font-weight: bold;
                        font-size: 21px;
                        color: $tertiary;
                        .icon {
                            display: none;
                        }
                    }
                }

                .upload-file-card {
                    border: 1px solid #e6e6e6;
                    .card-text {
                        background-color: #fcfcfc;
                        .fileInput {
                            cursor: pointer;
                            height: 100%;
                            position: absolute;
                            top: 0;
                            right: 0;
                            z-index: 99;
                            font-size: 50px;
                            opacity: 0;
                            -moz-opacity: 0;
                            filter: Alpha(opacity=0);
                        }
                    }
                }
                .preview {
                    .preview-carousel {
                        .carousel {
                            width: 95%;
                            .VueCarousel {
                                .VueCarousel-navigation {
                                    button {
                                        padding: 0px !important;
                                    }
                                    .VueCarousel-navigation-prev {
                                        margin-left: 38px !important;
                                    }
                                    .VueCarousel-navigation-next {
                                        margin-right: 38px !important;
                                    }
                                }
                            }

                            .preview-slide {
                                padding: 12px;
                                .preview-item {
                                    display: flex;
                                    flex-direction: row;
                                    justify-content: center;
                                    align-items: center;
                                    cursor: pointer;

                                    .preview-source {
                                        position: relative;
                                        width: 225px;
                                        height: 125px;
                                        overflow: hidden;
                                        .delete-icon {
                                            position: absolute;
                                            width: 24px;
                                            height: 24px;
                                            font-size: 18px;
                                            border-radius: 50%;
                                            color: white;
                                            background-color: $error;
                                            flex-direction: row;
                                            justify-content: center;
                                            align-items: center;
                                            top: 8px;
                                            left: 8px;
                                            cursor: pointer;
                                            display: none;
                                        }
                                        &:hover {
                                            .delete-icon {
                                                display: flex;
                                            }
                                        }
                                        img,
                                        video {
                                            width: auto;
                                            height: auto;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

@media (max-width: 768px) {
    .nueva-publicacion {
        .container-nueva-publicacion {
            padding: 25px 0px;
            margin: auto;
            .responsive-nueva-publicacion {
                width: 90%;
                max-width: 1180px;
                margin: auto;
                .card-nueva-publicacion {
                    margin: 42px 0px;
                    .form-header {
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        background-color: #e3e3e3;
                        margin-left: 0px;
                        padding: 8px 24px;
                        border-radius: 32px;
                        cursor: pointer;
                        .icon {
                            display: block;
                            margin-top: 8px;
                        }
                        &.header-active {
                            .icon {
                                img {
                                    transform: rotate(180deg);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
