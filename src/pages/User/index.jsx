import Account from '../../components/Account';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import { getUserData } from '../../redux/slices/userSlice';
import ButtonEditName from '../../components/ButtonEditName';

export default function User() {
    
    const token = useSelector(state => state.auth.token);
    const userData = useSelector((state) => state.user)
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchDataUser = async () => {
            try {
                const response = await fetch("http://localhost:3001/api/v1/user/profile", {
                method: "POST",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        accept: "application/json",
                    }
                });
                if (response.ok) {
                    const data = await response.json();
                    //console.log(data);
                    dispatch(getUserData({ data }));
                }
            } catch (e) {
                console.log(e)
            }
        }
        fetchDataUser();
    });

    return (

        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br />{userData.firstName + " " + userData.lastName + "!"}</h1>
                <ButtonEditName />
            </div>
            <div className="header">
            </div>
            <h2 className="sr-only">Accounts</h2>
            <Account
                title="Argent Bank Checking (x8349)"
                amount="$2,082.79"
                description="Available Balance" />
            <Account
                title="Argent Bank Savings (x6712)"
                amount="$10,928.42"
                description="Available Balance" />
            <Account
                title="Argent Bank Credit Card (x8349)"
                amount="$184.30"
                description="Current Balance" />
        </main>
    )
}