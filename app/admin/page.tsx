

export default function AdminDashboard() {

  return (
    
    <div className="space-y-6 p-6">

      <h1 className="text-2xl font-bold">Panel de Administración</h1>



      <div className="admin-card bg-white p-6 rounded shadow">
        <h2 className="text-lg font-bold mb-4">Bienvenido al Panel de Administración</h2>
        <p className="text-gray-600 mb-4 p-4 rounded">
          Desde aquí podrás gestionar todo el contenido de tu sitio web. Utiliza el menú lateral para navegar entre las
          diferentes secciones.
        </p>
        <p className="text-gray-600">
          Cada sección te permite editar textos e imágenes de manera sencilla. Selecciona una sección para comenzar.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="admin-card bg-white p-6 rounded shadow hover:shadow-md transition-shadow">
          <h3 className="text-lg font-bold mb-2">Gestión de Páginas</h3>
          <p className="text-gray-600 mb-4">Edita el contenido de las diferentes páginas del sitio web.</p>
        </div>

        <div className="admin-card bg-white p-6 rounded shadow hover:shadow-md transition-shadow">
          <h3 className="text-lg font-bold mb-2">Gestión de Imágenes</h3>
          <p className="text-gray-600 mb-4">Administra las imágenes que se muestran en el sitio web.</p>
        </div>

        <div className="admin-card bg-white p-6 rounded shadow hover:shadow-md transition-shadow">
          <h3 className="text-lg font-bold mb-2">Gestión de Productos</h3>
          <p className="text-gray-600 mb-4">Añade, edita o elimina productos del catálogo.</p>
        </div>
      </div>
    </div>
  );
}
