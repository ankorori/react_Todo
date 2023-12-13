import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { addItem } from '../api/invokeApi';
import Header from './Header';

const Add = () => {
    const [error, setError] = useState(null);
    const [memo, setMemo] = useState("");
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

    const handleAdd = (e) => {
        addItem(e, memo).then(
            navigate('/DashBoard')
        ).catch((error) => {
            console.error(error);
            setError("エラーが発生しました。");
            return;
        });
    };

    return (
        <div>
            <Header />
            <div className="relative isolate px-6 pt-14 lg:px-8">
                { error && 
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <strong className="font-bold">Err!</strong>
                    <span className="block sm:inline">{error}</span>
                    <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                        <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                    </span>
                </div> }
                <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                    <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
                </div>
                <div className="mx-auto max-w-2xl sm:py-10">
                    <div className="text-center flex-col space-y-4">
                        <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-xl">Add</h1>
                        <form>
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">memo:
                                <input
                                    className="bg-gray-300 border-1 rounded-md p-2 m-2"
                                    type="text"
                                    placeholder="Memo"
                                    value={memo}
                                    onChange={(e) => setMemo(e.target.value)}
                                />
                                </label>
                            </div>
                            <button className="
                                bg-gray-300
                                border-0
                                p-2
                                rounded-md
                                hover:bg-gray-400
                                hover:text-white" type="button" onClick={handleAdd}>Add</button>
                        </form>
                    </div>
                </div>
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

export default Add;