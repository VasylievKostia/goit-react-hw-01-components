import style from './Friends-list.module.css';


export function FriendsList({ friends }) {
  return <ul className={style.list}>
      {friends.map((el) =>
          <li className={style.item} key={el.id}>
              {el.isOnline ? <span className={style.isOnline}></span> : <span className={style.isOffline}></span>}
              <img className={style.avatar} src={el.avatar} alt={el.name} width='48px' />
              <p className={style.name}>{el.name }</p>
        </li>    
    )}
</ul>
};



// {friends.map((el) =>
//           <li className={style.item} key={el.id}>
//             {el.isOnline ? <span  className={style.isOnline }></span> : <span className={style.status}></span>}
//             <img className={style.avatar} src={el.avatar} alt="" width="48" />
//             <p className={style.name}>{el.name?el.name:"No data"}</p>
//           </li>
//        )}      