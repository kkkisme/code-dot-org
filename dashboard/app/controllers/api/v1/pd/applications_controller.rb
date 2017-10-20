class Api::V1::Pd::ApplicationsController < ::ApplicationController
  load_and_authorize_resource class: 'Pd::Application::ApplicationBase'

  # GET /api/v1/pd/applications
  def index
    regional_partner_id = params[:regional_partner]
    application_data = {}

    {
      csf_facilitator: Pd::Application::Facilitator1819Application.csf,
      csd_facilitator: Pd::Application::Facilitator1819Application.csd,
      csp_facilitator: Pd::Application::Facilitator1819Application.csp,
      csd_teacher: Pd::Application::Teacher1819Application.csd,
      csp_teacher: Pd::Application::Teacher1819Application.csp,
    }.each do |role, applications|
      applications = applications.where(regional_partner: regional_partner_id) if regional_partner_id
      apps_by_status = applications.select(:status, :locked_at).group_by(&:status)
      application_data[role] = {}
      apps_by_status.each do |status, apps_with_status|
        application_data[role][status] = {}
        grouped_apps = apps_with_status.group_by {|app| app.locked? ? 'locked' : 'unlocked'}
        grouped_apps.each do |locked_state, apps|
          application_data[role][status][locked_state] = apps.size
        end
      end
    end

    render json: application_data
  end

  # GET /api/v1/pd/applications/1
  def show
    render json: @application, serializer: Api::V1::Pd::ApplicationSerializer
  end
end
