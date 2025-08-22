-- =====================================================
-- POLÍTICAS RESTRICTIVAS - SOLO USUARIOS ESPECÍFICOS PUEDEN EDITAR
-- =====================================================

-- Función para verificar si el usuario es administrador
CREATE OR REPLACE FUNCTION is_admin()
RETURNS BOOLEAN AS supabase/migrations/20250101000001_restrictive_admin_policies.sql
BEGIN
    -- Verificar si el usuario está autenticado
    IF auth.role() != 'authenticated' THEN
        RETURN FALSE;
    END IF;
    
    -- Lista de emails autorizados para editar
    RETURN auth.jwt() ->> 'email' IN (
        'deliavergara.joyas@gmail.com'  -- TU EMAIL REAL
        -- Agrega más emails aquí si necesitas más administradores
    );
END;
supabase/migrations/20250101000001_restrictive_admin_policies.sql LANGUAGE plpgsql SECURITY DEFINER;

-- =====================================================
-- NUEVAS POLÍTICAS RESTRICTIVAS PARA PRODUCTOS
-- =====================================================

-- Solo admins pueden insertar productos
CREATE POLICY 'productos_admin_insert' ON productos
    FOR INSERT
    WITH CHECK (is_admin());

-- Solo admins pueden actualizar productos
CREATE POLICY 'productos_admin_update' ON productos
    FOR UPDATE
    USING (is_admin())
    WITH CHECK (is_admin());

-- Solo admins pueden eliminar productos
CREATE POLICY 'productos_admin_delete' ON productos
    FOR DELETE
    USING (is_admin());

-- =====================================================
-- NUEVAS POLÍTICAS RESTRICTIVAS PARA INSUMOS
-- =====================================================

-- Solo admins pueden insertar insumos
CREATE POLICY 'insumos_admin_insert' ON insumos
    FOR INSERT
    WITH CHECK (is_admin());

-- Solo admins pueden actualizar insumos
CREATE POLICY 'insumos_admin_update' ON insumos
    FOR UPDATE
    USING (is_admin())
    WITH CHECK (is_admin());

-- Solo admins pueden eliminar insumos
CREATE POLICY 'insumos_admin_delete' ON insumos
    FOR DELETE
    USING (is_admin());
