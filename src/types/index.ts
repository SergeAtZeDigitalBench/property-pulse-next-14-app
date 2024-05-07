export * from './properties'

export type PageProps<
  P = Record<string, string>,
  Q = Record<string, string>,
> = {
  params: P
  searchParams: Q
}
