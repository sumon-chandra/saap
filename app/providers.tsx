"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { EdgeStoreProvider } from '../lib/edgestore';

export interface ProvidersProps {
	children: React.ReactNode;
	themeProps?: ThemeProviderProps;
}

const queryClient = new QueryClient()

export function Providers({ children, themeProps }: ProvidersProps) {
	return (
		<NextUIProvider>
			<QueryClientProvider client={queryClient}>
				<ReactQueryDevtools initialIsOpen={false} />
				<NextThemesProvider {...themeProps}>
					<SessionProvider>
						<EdgeStoreProvider>
							{children}
						</EdgeStoreProvider>
					</SessionProvider>
				</NextThemesProvider>
			</QueryClientProvider>
		</NextUIProvider>
	);
}
