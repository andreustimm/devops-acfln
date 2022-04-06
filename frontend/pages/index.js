import Link from 'next/link'

export default function Index() {
  return (
    <div>
      Hello World.{' '}
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  )
}
