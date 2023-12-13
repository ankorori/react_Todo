import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { getAlldeta } from '../api/invokeApi';
import Header from './Header';
import DeleteBtn from './DeleteBtn';

const Dashboard = () => {
    const [results, setResults] = useState({
        items: [],
        totalRecordsCount: 0
    });
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleLogout = () => {
        // トークンの削除やセッションのクリアなど、ログアウトに関する処理を実装する

        // 例: ローカルストレージからトークンを削除
        localStorage.removeItem('token');
        localStorage.removeItem('nickname');
        // ログアウト後にログインページにリダイレクトする
        navigate('/login');
        alert("ログアウトしました。")
    };

    React.useEffect(() => {
        getAlldeta().then((value) => {
            setResults(value);
        }).catch((error) => {
            console.error(error);
            setError("エラーが発生しました。");
        });
    }, []);

    return (
        <div>
            <Header />
            <div className="relative isolate px-6 pt-14 lg:px-8">
            <div className="flex flex-row justify-around items-center">
                <p>memo</p>
                <p>id</p>
            </div>
            { error ? <p>{error}</p> :
                results.items.map((item, index) =>
                <div key={index} className="flex flex-row justify-around items-center">
                    <div className="basis-4/5">
                        <input className="bg-gray-100 border-1 rounded-md p-2 m-2" type="text" defaultValue={item.value} />
                    </div>
                    <div className="basis-1/5">
                        <DeleteBtn id={item.id} />
                    </div>
                </div>
            )}
            </div>

            <button className="
                bg-gray-300
                border-0
                p-2
                rounded-md
                hover:bg-gray-400
                hover:text-white" type="button" onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Dashboard;