import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { useState } from 'react';
import { motion } from 'framer-motion';

export function AccountPage() {
  // Mock user info
  const [user, setUser] = useState({
    name: 'Jordan Brooks',
    email: 'jordan.brooks@sentineltrade.com',
    mfa: true,
    kyc: 'Verified',
  });
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({ name: user.name, email: user.email });

  function handleEdit() {
    setEditMode(true);
    setForm({ name: user.name, email: user.email });
  }
  function handleSave() {
    setUser({ ...user, ...form });
    setEditMode(false);
  }

  return (
    <main className="min-h-screen bg-slate-50 pb-24 pt-10">
      <div className="max-w-2xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <Card className="shadow-md border-blue-100">
            <CardHeader>
              <CardTitle className="font-roboto text-2xl text-blue-900">Your Account</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="profile" className="w-full">
                <TabsList className="mb-4">
                  <TabsTrigger value="profile">Profile</TabsTrigger>
                  <TabsTrigger value="security">Security</TabsTrigger>
                  <TabsTrigger value="kyc">KYC</TabsTrigger>
                </TabsList>
                <TabsContent value="profile">
                  <form className="space-y-6">
                    <div>
                      <Label htmlFor="acct-name" className="font-bold">Name</Label>
                      <Input id="acct-name" value={editMode ? form.name : user.name} disabled={!editMode} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
                    </div>
                    <div>
                      <Label htmlFor="acct-email" className="font-bold">Email</Label>
                      <Input id="acct-email" value={editMode ? form.email : user.email} disabled={!editMode} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
                    </div>
                    <div className="flex gap-3 mt-4">
                      {!editMode ? (
                        <Button id="edit-profile-btn" type="button" onClick={handleEdit}>Edit</Button>
                      ) : (
                        <>
                          <Button id="save-profile-btn" type="button" onClick={handleSave}>Save</Button>
                          <Button id="cancel-edit-btn" type="button" variant="outline" onClick={() => setEditMode(false)}>Cancel</Button>
                        </>
                      )}
                    </div>
                  </form>
                </TabsContent>
                <TabsContent value="security">
                  <div className="space-y-4">
                    <Label className="font-bold">Multi-Factor Authentication</Label>
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-green-100 text-green-700 px-2 py-1 text-sm font-bold">Enabled</span>
                      <Button id="manage-mfa-btn" size="sm" variant="outline">Manage</Button>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="kyc">
                  <div className="space-y-4">
                    <Label className="font-bold">KYC Status</Label>
                    <span className="rounded bg-blue-100 text-blue-800 px-2 py-1 font-bold">{user.kyc}</span>
                    <Button id="view-kyc-btn" size="sm" variant="outline">View Details</Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </main>
  );
}
