// import { useEffect } from 'react';
// import { useParams, NavLink } from 'react-router-dom';
// import { useDispatch } from 'react-redux';

// import PokemonAPI from '../../redux/services/PokemonService.tsx';
// import { setLoader } from '../../redux/reducers/LoaderSlice.tsx';
// import { setRequest } from '../../redux/reducers/SearchSlice.tsx';
// import clearImageUrl from '../../helper/clearImageUrl.tsx';

// import PokemonAbility from './Figure/PokemonAbility.tsx';
// import PokemonType from './Figure/PokemonType.tsx';
// import PokemonStats from './Figure/PokemonStats.tsx';
// import NotFound from '../NotFound/NotFound.tsx';

// import styles from './PokemonCurrent.module.css';

// function PokemonCurrent() {
//   const dispatch = useDispatch();

//   const { page, name } = useParams();
//   const { data, isSuccess } = PokemonAPI.useGetPokemonDataQuery(name);

//   useEffect(() => {
//     dispatch(setLoader(true));
//   }, [dispatch]);

//   return (
//     <div className={styles.wrapper}>
//       {isSuccess && (
//         <>
//           <img
//             className={styles.image}
//             src={clearImageUrl(data.sprites?.other?.['official-artwork']?.front_default)}
//             width="300"
//             height="300"
//             alt={data.name}
//           />
//           <div>
//             <h4 className={styles.title}>{data.name}</h4>
//             <PokemonType types={data.types} />
//             <PokemonAbility abilities={data.abilities} />
//             <PokemonStats stats={data.stats} />
//           </div>
//         </>
//       )}

//       {!isSuccess && <NotFound />}

//       <NavLink
//         className={styles.close}
//         to={`/page/${page && +page}`}
//         onClick={() => {
//           dispatch(setRequest(''));
//           localStorage.setItem('request', '');
//         }}
//       >
//         +
//       </NavLink>
//     </div>
//   );
// }

// export default PokemonCurrent;
