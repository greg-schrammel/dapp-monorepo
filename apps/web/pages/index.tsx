import { ExternalLink } from 'ui'

export default function Home() {
  return (
    <div className="mt-8 flex flex-col gap-10  md:mt-0 md:items-center">
      <div className="w-full max-w-screen-md md:mb-2">
        <div className="max-w-[340px]">
          <h1 className="text-2xl font-extrabold">Hey 👋</h1>
          <p className="text-low mt-3">
            This is a dapp monorepo template setup{' '}
            <ExternalLink
              href={
                process.env.NODE_ENV === 'production'
                  ? 'https://dapp-monorepo-docs.vercel.app/'
                  : 'http://localhost:3001'
              }
            >
              Check the docs
            </ExternalLink>
          </p>
        </div>
      </div>
    </div>
  )
}
