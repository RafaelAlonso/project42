import Layout from '../components/mainLayout';
import Link from 'next/link';


// List item that will have the link to each project
const ProjectLink = props => (
  <li>
    <Link href={`/project?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

export default function Projects () {
  return (
    <Layout>
      <h1>Nossa página de projetos</h1>

    {/* Our list of projects */}
    <ul>
      <ProjectLink title="Task Manager" />
      <ProjectLink title="Finance Manager" />
      <ProjectLink title="Super ultra game" />
    </ul>
    </Layout>
  )
}
