function DataList() {
  return (
    <section className="grid grid-cols-2 gap-20 mt-16">
      <div>
        <h3 className="mb-10 pb-4 text-2xl text-center border-b border-green-900">
          Uncontrolled Form data:
        </h3>
        <div className="text-orange-600">No data yet</div>
      </div>
      <div>
        <h3 className="mb-10 pb-4 text-2xl text-center border-b border-green-900">
          React Hook Form data:
        </h3>
        <div className="text-orange-600">No data yet</div>
      </div>
    </section>
  );
}

export default DataList;
