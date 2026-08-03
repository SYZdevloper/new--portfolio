import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import './admin.css'

export default async function AdminLeadsPage() {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  // Fetch leads
  const { data: leads, error } = await supabase
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <div className="admin-container">
      <header className="admin-header">
        <h1>Leads Dashboard</h1>
        <div className="admin-user">
          <span>{user.email}</span>
          <form action="/auth/signout" method="post">
            <button className="btn light">Sign Out</button>
          </form>
        </div>
      </header>

      <main className="admin-main">
        {error ? (
          <div className="admin-error">
            <p>Error loading leads: {error.message}</p>
            <p className="admin-hint">Make sure you have created the `leads` table in Supabase.</p>
          </div>
        ) : !leads || leads.length === 0 ? (
          <div className="admin-empty">
            <p>No leads captured yet.</p>
          </div>
        ) : (
          <div className="table-wrapper">
            <table className="leads-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Company</th>
                  <th>Phone</th>
                  <th>Service</th>
                  <th>Budget</th>
                  <th>Message</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead) => (
                  <tr key={lead.id}>
                    <td>{new Date(lead.created_at).toLocaleDateString()}</td>
                    <td><strong>{lead.name}</strong></td>
                    <td><a href={`mailto:${lead.email}`}>{lead.email}</a></td>
                    <td>{lead.company || '-'}</td>
                    <td>{lead.phone || '-'}</td>
                    <td><span className="badge">{lead.service_interest}</span></td>
                    <td>{lead.budget || '-'}</td>
                    <td className="msg-cell">{lead.message || '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  )
}
