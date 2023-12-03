import { useSelector } from 'react-redux';
import { selectHookFrom } from '../redux/reducers/FormHookSlice.tsx';
import { selectUncontrolledFrom } from '../redux/reducers/FormUncontrolledSlice.tsx';

import ItemEmpty from '../components/Form/Item/ItemEmpty.tsx';
import ItemFilled from '../components/Form/Item/ItemFilled.tsx';

function DataList() {
  const uncontrolled = useSelector(selectUncontrolledFrom);
  const hook = useSelector(selectHookFrom);

  const reversedUncontrolled = [...uncontrolled].reverse();
  const reversedHook = [...hook].reverse();

  return (
    <section className="grid grid-cols-2 gap-20 mt-16">
      <div>
        <h3 className="mb-6 pb-4 text-2xl text-center border-b border-green-900">
          Uncontrolled Form data:
        </h3>

        {!reversedUncontrolled.length && <ItemEmpty />}

        {!!reversedUncontrolled.length && (
          <div className="grid gap-12">
            {reversedUncontrolled.map((item, index) => {
              const indexKey = `${index}`;
              return (
                <ItemFilled
                  key={indexKey}
                  name={item.name}
                  age={+item.age}
                  email={item.email}
                  country={item.country}
                  gender={item.gender}
                  image64={item.image64}
                />
              );
            })}
          </div>
        )}
      </div>

      <div>
        <h3 className="mb-6 pb-4 text-2xl text-center border-b border-green-900">
          React Hook Form data:
        </h3>

        {!reversedHook.length && <ItemEmpty />}

        {!!reversedHook.length && (
          <div className="grid gap-12">
            {reversedHook.map((item, index) => {
              const indexKey = `${index}`;
              return (
                <ItemFilled
                  key={indexKey}
                  name={item.name}
                  age={+item.age}
                  email={item.email}
                  country={item.country}
                  gender={item.gender}
                  image64={item.image64}
                />
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

export default DataList;
