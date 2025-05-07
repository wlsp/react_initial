import "./index.css";
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import ErrorBoundary from '@/lib/utils/boundaries/error-boundary';
import ErrorFallback from '@/components/ui/error-fallback';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {CounterProvider} from "@/provider/counter-provider";

import App from './App';
import RickAndMortyLayout from '@/layouts/rick-and-morty-layout';
import BlogLayout from '@/layouts/blog-layout';
import RootLayout from "@/layouts/root-layout";
import CounterLayout from "@/layouts/counter-layout";
import CounterPage from "@/pages/counter/counter-page";
import BlogPage from "@/pages/blog/blog-layout";
import RickAndMortyPage from "@/pages/rick-and-morty/rick-and-morty-layout";
import CharactersPage from "@/pages/rick-and-morty/characters-page";
import CharacterDetailPage from "@/pages/rick-and-morty/character-detail-page";
import {Outlet} from "react-router";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ErrorBoundary fallback={<ErrorFallback/>}>
            <BrowserRouter>
                <CounterProvider>
                    <Routes>
                        <Route element={<RootLayout/>}>
                            <Route path="/" element={<App/>}/>

                            <Route path={"rick-and-morty"} element={<RickAndMortyLayout/>}>
                                <Route index element={<RickAndMortyPage/>} />

                                <Route path={"characters"} element={<Outlet />}>
                                    <Route index element={<CharactersPage />} />
                                    <Route path={":id"} element={<CharacterDetailPage />} />
                                </Route>
                            </Route>

                            <Route path={"blog"} element={<BlogLayout/>}>
                                <Route index element={<BlogPage/>}/>
                            </Route>

                            <Route path={"counter"} element={<CounterLayout/>}>
                                <Route index element={<CounterPage/>}/>
                            </Route>
                        </Route>
                    </Routes>
                </CounterProvider>
            </BrowserRouter>
        </ErrorBoundary>
    </StrictMode>
);
